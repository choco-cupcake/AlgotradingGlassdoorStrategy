// now we want to craft an excel file to move te analysis part on Excel to perform the first tests

const fs = require('fs')
let csvWriter
const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

main()

async function main(){
  await setupMongoDB()
  console.log("MongoDB setup done")
  setupCSV()

  const companies = await (await mongoDB.db("GD_strategy").collection("GD_companies").find({})).toArray()
  console.log("Companies gathered")
  for(let company of companies){
    await processCompany(company)
    console.log("#")
  }
}

async function processCompany(company){
  let __dates = [company.reviews.ceoRating.trend.dates, company.reviews.seniorManagement.trend.dates, company.reviews.overallRating.trend.dates]
  let _dates = __dates.sort((a,b) => { return b.length - a.length})[0] // select longest dates obj
  let _companyName = company.name
  let _ticker = company.ticker
  let _ceoRating = company.reviews.ceoRating.trend
  let _ceoRatingSize = company.reviews.ceoRating.distribution.values.reduce((prev,curr) => { return prev + curr }, 0)
  let _upMgmtRating = company.reviews.seniorManagement.trend
  let _upMgmtRatingSize = company.reviews.seniorManagement.distribution.values.reduce((prev,curr) => { return prev + curr }, 0)
  let _overallRating = company.reviews.overallRating.trend
  let _overallRatingSize = company.reviews.overallRating.distribution.values.reduce((prev,curr) => { return prev + curr }, 0)

  let priceRows = company.priceData.split('\n')
  let header = priceRows.shift().split(',').map(e => e.replace('Adj Close','adj_close').toLowerCase())
  priceRows = priceRows.map(e => {
    let fields = e.split(',')
    let ret = {}
    for(let i=0; i<fields.length; i++){
      ret[header[i]] = fields[i]
    }
    return ret
  })

  computeEMAs(priceRows) // adds columns to ret object

  for(let i=0; i<_dates.length; i++){
    let d = _dates[i]
    let _p = getClosePricesByDate(priceRows, d)
    if(!_p) continue
    // get ratings for current date
    let ceoRatingIndex = _ceoRating.dates.indexOf(d)
    let ceoRating = ceoRatingIndex >= 0 ? _ceoRating.employerRatings[ceoRatingIndex] : ''
    let upMgmtRatingIndex = _upMgmtRating.dates.indexOf(d)
    let upMgmtRating = upMgmtRatingIndex >= 0 ? _upMgmtRating.employerRatings[upMgmtRatingIndex] : ''
    let overallRatingIndex = _overallRating.dates.indexOf(d)
    let overallRating = overallRatingIndex >= 0 ? _overallRating.employerRatings[overallRatingIndex] : ''
    let row = [d, _companyName, _ticker,ceoRating,_ceoRatingSize,upMgmtRating,_upMgmtRatingSize,overallRating,_overallRatingSize,_p.price,_p.EMA10,_p.EMA14]
    fs.writeFileSync("./out.csv", row.join(',') + '\n', { flag: 'a' }, function (err) {})
  }
}

function convertDate(date){
  let t = date.split("/")
  let y = t[0]
  let m = t[1].padStart(2, '0')
  let d = t[2].padStart(2, '0')
  return y + '-' + m + '-' + d
}

function getClosePricesByDate(prices, date){
  let dateConverted = convertDate(date)
  let row = getRowByDate(prices, dateConverted)
  if(!row){
    return {price: '', EMA10: '', EMA14: ''} // no prices available
  }
  return {price: row.adj_close, EMA10: row.EMA10, EMA14: row.EMA14}

}

function getRowByDate(prices, date){
  for(let offset = 0; offset < 7; offset++){
    for(let row of prices){
      let d = new Date(date)
      d.setDate(d.getDate() - offset);
      let ds = d.toLocaleString().split(',')[0]
      let _date = convertDate(ds)
      if(row['date'] == _date){
        return row
      }
    }
  }
  return null
}

async function computeEMAs(prices){
  const multiplier10 = 2 / (10 + 1)
  const multiplier14 = 2 / (14 + 1)
  let state10 = prices[0].adj_close
  let state14 = prices[0].adj_close
  // EMA = Closing price x multiplier + EMA (previous day) x (1-multiplier)
  for(let row of prices){
    state10 = row.adj_close * multiplier10 + state10 * ( 1 - multiplier10)
    row.EMA10 = state10
    state14 = row.adj_close * multiplier14 + state14 * ( 1 - multiplier14)
    row.EMA14 = state14
  }
}

async function setupMongoDB(){
  const uri = "mongodb+srv://admin:" + process.env.MONGODB_PWD + "@cluster0.9pbl5q2.mongodb.net/?retryWrites=true&w=majority";
  mongoDB = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  await mongoDB.connect();
}

function setupCSV(){
  fs.writeFileSync("./out.csv", 'Date,Company Name,Company Ticker,ceoRating,ceoRatingSize,upMgmtRating,upMgmtRatingSize,overallRating,overallRatingSize,Price,PriceMA10,PriceMA14\n', { flag: 'w' }, function (err) {});
}
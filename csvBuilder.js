// now we want to craft an excel file to move te analysis part on Excel to perform the first tests

const CSVWriter = require('csv-writer')
let csvWriter
const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

let EMA10 = {}
let EMA14 = {}


async function main(){
  await setupMongoDB()
  console.log("MongoDB setup done")

  const companies = await (await mongoDB.db("GD_strategy").collection("GD_companies").find({})).toArray()
  console.log("Companies gathered")
  for(let company of companies){
    processCompany(company)
  }
}

async function processCompany(company){
  assert(company.reviews.ceoRating.trend.dates.length == company.reviews.seniorManagement.trend.dates.length)

  let _dates = company.reviews.ceoRating.trend.dates
  let _companyName = company.name
  let _ticker = company.ticker
  let _ceoRating = company.reviews.ceoRating.trend.employerRatings
  let _ceoRatingSize = company.reviews.ceoRating.distribution.values.reduce((prev,curr) => { return prev + curr }, 0)
  let _upMgmtRating = company.reviews.seniorManagement.trend.employerRatings
  let _upMgmtRatingSize = company.reviews.seniorManagement.distribution.values.reduce((prev,curr) => { return prev + curr }, 0)
  let _overallRating = company.reviews.overallRating.trend.employerRatings
  let _overallRatingSize = company.reviews.overallRating.distribution.values.reduce((prev,curr) => { return prev + curr }, 0)

  let priceRows = company.priceData.split('\r\n')
  let header = priceRows.shift.split(',').map(e => e.replace('Adj Close','adj_close').toLowerCase())
  priceRows = priceRows.map(e => {
    let fields = e.split(',')
    let ret = {}
    for(let i=0; i<fields.length; i++){
      ret[header[i]] = fields[i]
    }
    return ret
  })

  computeEMAs(priceRows)

  for(let d of _dates){
    let _p = getClosePricesByDate(priceRows, d)

    // write out csv line directly
    let row = {
      date: d,
      companyName: _companyName,
      companyTicker: _ticker,
      ceoRating: _ceoRating,
      ceoRatingSize: _ceoRatingSize,
      upMgmtRating: _upMgmtRating,
      upMgmtRatingSize: _upMgmtRatingSize,
      overallRating: _overallRating,
      overallRatingSize: _overallRatingSize,
      price: _p.price,
      priceMA10: _p.EMA10,
      priceMA14: _p.EMA14
    }
  }

}

function convertDate(date){
  let t = date.split("/")
  let y = date[0]
  let m = date[1].padStart(2, '0')
  let d = date[2].padStart(2, '0')
  return y + '-' + m + '-' + d
}

function getClosePricesByDate(prices, date){
  let dateConverted = convertDate(date)
  let row = getRowByDate(prices, dateConverted)
  if(!row){
    console.log("Fatal, date not found. Must develop a function to get closest earlier day's prices")
  }
  return {price: row.adj_close, EMA10: row.EMA10, EMA14: row.EMA14}

}

function getRowByDate(prices, date){
  for(let row of prices){
    if(row['date'] == date){
      return row
    }
  }
  return null
}

async function computeEMAs(prices){ // prices : [{date: '', adj_close:''}, ...]
  /* 2021/2/21
  Date,Open,High,Low,Close,Adj Close,Volume
2020-08-03,151.089996,151.419998,149.309998,150.410004,139.011520,2264900
2020-08-04,151.089996,151.419998,149.309998,150.410004,139.011520,2264900*/

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

function getEMAVal(ema, multiplier, closePrice){
  return closePrice * multiplier + ema * (1 - multiplier)
}

async function setupMongoDB(){
  const uri = "mongodb+srv://admin:" + process.env.MONGODB_PWD + "@cluster0.9pbl5q2.mongodb.net/?retryWrites=true&w=majority";
  mongoDB = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  await mongoDB.connect();
}

// columns will be: -time, -company, -ticker, priceClose, priceMA10, priceMA14, -ceoRating, -ceoRatingSize, -upMgmtRating, -upMgmtRatingSize,
function setupCSV(){
  const createCsvWriter = CSVWriter.createObjectCsvWriter;
  csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
      {id: 'date', title: 'Date'},
      {id: 'companyName', title: 'Company Name'},
      {id: 'companyTicker', title: 'Company Ticker'},
      {id: 'ceoRating', title: 'ceoRating'},
      {id: 'ceoRatingSize', title: 'ceoRatingSize'},
      {id: 'upMgmtRating', title: 'upMgmtRating'},
      {id: 'upMgmtRatingSize', title: 'upMgmtRatingSize'},
      {id: 'overallRating', title: 'overallRating'},
      {id: 'overallRatingSize', title: 'overallRatingSize'},
      {id: 'price', title: 'Price'},
      {id: 'priceMA10', title: 'PriceMA10'},
      {id: 'priceMA14', title: 'PriceMA14'},
    ]
  });

}

async function writeOutCsv(data){
  csvWriter
    .writeRecords(data)
}

function assert(cond, error){
  // for development 
  if(cond){
    console.log(error)
    process.exit()
  }
}
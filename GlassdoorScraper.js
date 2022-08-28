const axios = require('axios')
const puppeteer = require('puppeteer-extra')
const fs = require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const categories = [
  'overallRating',
  'recommend',
  'ceoRating',
  'bizOutlook',
  'cultureAndValues',
  'diversityAndInclusion',
  'workLife',
  'seniorManagement',
  'compAndBenefits',
  'careerOpportunities'
  ]

let mongoDB
let mongo_dbName = 'GD_strategy'
let mongo_collectionName = 'GD_companies'

async function main(){
  await puppeteerBoot()
  await setupMongoDB()
  const rawData = readInputData();

  for(rawObj of rawData){
    if(await hasAlreadyBeenParsed(rawObj.url)){
      console.log("Skipping " + rawObj.name)
      continue
    }
    let populatedObj = await populateRecordReviews(rawObj)
    populatedObj = await populateRecordCompanyData(populatedObj)
    console.log(populatedObj)
    if(populatedObj) await mongoDB.db(mongo_dbName).collection(mongo_collectionName).insertOne(populatedObj);
  }
}

async function hasAlreadyBeenParsed(url){
  let results = await mongoDB.db(mongo_dbName).collection(mongo_collectionName).find({url: url})
  return (await results.toArray()).length
}

function readInputData(){
  let rawData = JSON.parse(fs.readFileSync('./glassdoorData/dataset_GD_full.json', 'utf8'));
  let origLen = rawData.length
  // remove duplicates
  for(let i=0; i<rawData.length - 1; i++){
    for(let j=i+1; j<rawData.length; j++){
      if(rawData[i].url == rawData[j].url) 
      rawData[j].url = ""
    }
  }
  rawData = rawData.filter(e => { return e.url.length ? true : false })
  let filteredLen = rawData.length
  console.log("Loaded " + filteredLen + " records, pruned of " + (origLen - filteredLen) + " duplicates")
  return rawData
}

async function populateRecordReviews(rawObj) {
  try{
    return await _populateRecordReviews(rawObj)
  } catch(e){
    console.log("Error getting reviews for company " + rawObj.name)
    console.log(e)
  }
}

async function populateRecordCompanyData(rawObj) {
  try{
    return await _populateRecordCompanyData(rawObj)
  } catch(e){
    console.log("Error getting company data for company " + rawObj.name)
    console.log(e)
  }
}

async function _populateRecordReviews(rawObj){
  let index = rawObj.id
  rawObj.reviews = {}
  for(let category of categories){
    rawObj.reviews[category] = {}
    // get trend data
    const trend = await axios.get(getUrl('trend', category, index));
    if(!trend.data){
      rawObj.reviews[category].trend = ''
      console.log("Trend data missing for cat=" + category + " company " + rawObj.name)
    }
    else
      rawObj.reviews[category].trend = trend.data
    // get distribution data
    const distribution = await axios.get(getUrl('distribution', category, index));
    if(!distribution.data){
      rawObj.reviews[category].distribution = ''
      console.log("Distribution data missing for cat=" + category + " company " + rawObj.name)
    }
    else
      rawObj.reviews[category].distribution = distribution.data
  }
  return rawObj
}

function getUrl(mode, category, index){
  const baseUrl = 'https://www.glassdoor.it/api/employer/'
  const pathUrl_1 = '-rating.htm?dataType='
  const pathUrl_2 = '&category='
  return baseUrl + index + pathUrl_1 + mode + pathUrl_2 + category
}

async function setupMongoDB(){
  const uri = "mongodb+srv://admin:" + process.env.MONGODB_PWD + "@cluster0.9pbl5q2.mongodb.net/?retryWrites=true&w=majority";
  mongoDB = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
	await mongoDB.connect();
}

async function _populateRecordCompanyData(rawObj){
  // clean url bc i screw up the data gathering
  rawObj.companyData = {}
  let urlParts = rawObj.url.replace("reviews","Overview").split("/")
  let lastPart = urlParts[urlParts.length - 1]
  let lastPart_parts = lastPart.split("-")
  lastPart = ''
  for(let i=0; i<lastPart_parts.length; i++){
    if(i<lastPart_parts.length - 1){
      lastPart += lastPart_parts[i][0].toUpperCase() + lastPart_parts[i].substring(1)
      lastPart += '-'
    }
    else
      lastPart += "EI_IE" + lastPart_parts[i].substring(1)
  }
  urlParts[urlParts.length - 1] = lastPart
  let cleanUrl = urlParts.join("/")
  rawObj.overviewUrl = cleanUrl
  // get puppeteer
  await page.goto(cleanUrl);
  let elementsXP = ['employer-headquarters','employer-website','employer-size','employer-founded','employer-type','employer-industry','employer-revenue']
  await page.waitForXPath(getDataCompanyXP('employer-headquarters'), {timeout: 10000});
  for(XP of elementsXP){
    try{
      let elem = (await page.$x(getDataCompanyXP(XP)))[0];
      let value = await page.evaluate(el => el.textContent, elem)
      rawObj.companyData[XP] = value
    } catch(e){}
  }
  return rawObj
}

function getDataCompanyXP(dataTest){
  let elem = dataTest=='employer-industry' || dataTest=='employer-website' ? 'a' : 'div'
  return "//" + elem+ "[@data-test='" + dataTest + "']"
}
async function puppeteerBoot() {
	const StealthPlugin = require('puppeteer-extra-plugin-stealth');
	puppeteer.use(StealthPlugin());
	let browser = await puppeteer.launch({
	  headless: false,
	  args: [ '--enable-automation', `--window-size=1920,1080`, '--lang=en-GB' ],
    defaultViewport: { width:1920, height:1080 }}) 
	page = (await browser.pages())[0]
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-GB'
  });
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "language", {get: function() { return "en-GB";}});
    Object.defineProperty(navigator, "languages", {get: function() {return ["en-GB", "en"];}});
  });
  console.log("Puppeteer boot done");
}

main()

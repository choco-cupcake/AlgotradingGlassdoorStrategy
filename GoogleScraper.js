//const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-extra');
const SP500_names = require("./sourceData/inBatch2.js")
let SP500_done = []

let page
let firstWrite = true
let firstWrite_done = true
let outStream = fs.createWriteStream('./glassdoorData/glassdoorLinks_batch2.json', {flags: 'a'});
let doneStream = fs.createWriteStream('./sourceData/SP500_done.json', {flags: 'a'});

main();

async function main(){
  parseDoneRecords()
  await puppeteerBoot();
  let extendedTimout = false // time extension needed to fill google captchas from time to time
  for(const n of SP500_names) 
    try {
      if(await crawlGoogle(n.name, extendedTimout)){
        await sleep(getRandomInt(1000, 3000))
        extendedTimout = false
      }
      else{
        extendedTimout = true
        console.log("== Failed " + n.name)
      }
    } catch(e) {
      console.log("Error for " + n.name); 
      console.log(e)
    }
  outStream.destroy();
}

function parseDoneRecords(){
  let SP500_done_raw = fs.readFileSync('./sourceData/SP500_done.json', 'utf8');
  if(SP500_done_raw) SP500_done = JSON.parse('[' + SP500_done_raw + ']')
  // checks if out is first write
  let t = fs.readFileSync('./glassdoorData/glassdoorLinks_batch2.json', 'utf8');
  if(t.length) firstWrite = false
}

async function crawlGoogle(companyName, extendedTimout){
  let xpathTO = extendedTimout ? 20000 : 5000
  if(SP500_done.includes(companyName)) return false
  let url = 'https://www.google.com/search?q=' + encodeURI(companyName.replaceAll(' ','+').replaceAll(' & ',' and ').replaceAll('&',' and ')) + "+glassdoor+site:https://www.glassdoor.com/Reviews/"
  await page.goto(url);
  let titleXP = "//h3[contains(text(),'Reviews - Glassdoor') or contains(text(),'Reviews | Glassdoor')]";
	try{
    await page.waitForXPath(titleXP, {timeout: xpathTO});
    let elem = (await page.$x(titleXP))[0];
    let elem_parent = (await elem.$x('..'))[0];
    var href = await page.evaluate(element => element.getAttribute("href"), elem_parent);
    if(!href){
      console.log("Error getting href for " + companyName)
      return false
    }
  }catch(e){ // variant for overview result if reviews result is not showing up
    titleXP = "//h3[contains(text(),' - Glassdoor') or contains(text(),' | Glassdoor')]";
    let elems = await page.$x(titleXP)
    if(elems.length == 0) return false
    for(const elem of elems){
      let elem_parent = (await elem.$x('..'))[0];
      var href = await page.evaluate(element => element.getAttribute("href"), elem_parent);
      if(!href || !(href.toLowerCase().includes('/overview/') || href.toLowerCase().includes('/reviews/'))){
        continue
      }
      let t = href.split("-")
      let tid = t[t.length-1].replace(".htm","").substring(1)
      if(isNaN(tid)) {href=""; continue}
      break
    }
    if(!href || !(href.toLowerCase().includes('/overview/') || href.toLowerCase().includes('/reviews/')))
      return false
  }
  console.log(companyName, href)
  writeOut(href, companyName)
  return true
}

function writeOut(href, companyName){
  // out update
  let out = {name: companyName, url: href}
  let out_txt = JSON.stringify(out)
  if(!firstWrite) out_txt = ',' + out_txt
  else firstWrite = false
  outStream.write(out_txt);
  // done update
  SP500_done.push(companyName)
  let out_done = '"' + companyName + '"'
  if(!firstWrite_done || SP500_done.length) out_done = ',' + out_done
  else firstWrite_done = false
  doneStream.write(out_done);
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
  await page.goto("https://www.google.com/search?q=test+search")
  // click Accept all
	let buttonXP = "//div[text()='Accept all']";
	await page.waitForXPath(buttonXP);
	let elem = await page.$x(buttonXP);
	await elem[0].click();
  console.log("Puppeteer boot done");
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * max);
}



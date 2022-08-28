//const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
/*let rawSP500 = fs.readFileSync("./glassdoorData/glassdoorLinks_SP500.json")
let rawTV = fs.readFileSync("./glassdoorData/glassdoorLinks.json")
let SP500list = JSON.parse(rawSP500)
let TVlist = JSON.parse(rawTV)*/
let totList = JSON.parse(fs.readFileSync("./glassdoorData/glassdoorLinks_batch2.json"))

// make urls uniform to the Overview page
totList = totList.map(e => {
  e.url = e.url.toLowerCase().replace("/Reviews/","/Overview/")
  e.url = e.url.includes(".htm") ? e.url.split(".htm")[0] + ".htm" : ""
  return e
})

// remove duplicates
for(let i=0; i<totList.length - 1; i++){
  for(let j=i+1; j<totList.length; j++){
    if(totList[i].url == totList[j].url) 
      totList[j].url = ""
  }
}

// filter out removed elements
totList = totList.filter(e => { return e.url.length ? true : false })

// get remaining non uniform urls
let nonUniform = totList.filter(e => {
  return e.url.includes("/Overview/") ? true : false
})
console.log(totList.length)
console.log(nonUniform.length)
for(const nu of nonUniform)
  console.log(nu)

// extract IDs
totList = totList.map(e => {
  let t = e.url.split("-")
  e.id = t[t.length-1].replace(".htm","").substring(1)
  return e
})

// TODO: scrap out corporations ?

// isolare gli ID buoni e ricrawlare quelli sbagliati con più vincoli sulla query google
let correctUrls = totList.filter(e => {
  return isNaN(e.id) ? false : true
})
let wrongUrls = totList.filter(e => {
  return isNaN(e.id) ? true : false
})

// write out clean file
fs.writeFileSync("./glassdoorData/dataset_GD_batch2.json", JSON.stringify(correctUrls))
// write out dirty records
fs.writeFileSync("./sourceData/inBatch3.json", JSON.stringify(wrongUrls))

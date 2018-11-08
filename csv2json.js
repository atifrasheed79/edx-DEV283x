const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs')

csv().fromFile(csvFilePath)
.on('data', (data)=>{
  const jsonStr=data.toString('utf8')
  //console.log(jsonStr)
  fs.appendFileSync('customer-data.json', jsonStr, function (error) {
    if (error) return console.error(error)
  })
})
.on('error',(err)=>{
  console.log(err)
})
.on('done',(error)=>{
  console.log("Conversion Completed")
})

/*
csv().fromFile(csvFilePath).then((jsonObj)=>{
  //fs.appendFile('customer-data.json', jsonObj, function (error) {
  //  if (error) return console.error(error)
  //})
    console.log(jsonObj);
})
*/

import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import cors from 'cors'
var app = express()
const PORT = process.env.PORT||5000
app.use(cors())
 
app.get('/', function (req, res, next) {
  res.send("RECYCLOPS")
})
 
app.listen(PORT, function () {
  console.log(`running on ${PORT}`)
})
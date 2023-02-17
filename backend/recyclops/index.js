import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
var app = express()
import cors from 'cors'
import bodyParser from 'body-parser'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const PORT = process.env.PORT||5000
app.use(cors())
 
import user from './routes/user.js'
import scan from './routes/scan.js'

app.use('/user', user)
app.use('/scan',scan)
app.get('/', function (req, res, next) {
  res.send("RECYCLOPS")
})
 
app.listen(PORT, function () {
  console.log(`running on ${PORT}`)
})
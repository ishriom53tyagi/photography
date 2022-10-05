const express = require('express')
const bodyParser = require('body-parser')
var path = require('path')
const app = express()
const route = require("./routes");

app.enable('trust proxy')


app.disable('x-powered-by')

app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ limit: '50mb' }))

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', route)

app.listen(4000 , () => {
    console.log("connected")
})
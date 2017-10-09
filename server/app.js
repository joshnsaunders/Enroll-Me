const express = require('express')
const app = express()
const knex = require('knex')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')

var info_schools = require('./routes/info_schools')
var info = require('./routes/info')
var schools = require('./routes/schools')




app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.use(schools)
app.use(info)
app.use(info_schools)

app.get('/', function(request, response){
    response.render('../public/index.html')
    })

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

module.exports = app;

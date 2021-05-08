const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')




const app = express();

dotenv.config({path : './config/config.env'})
console.log('asdsa')

app.use(morgan('dev'))

app.use(express.json({extended : false}))


connectDB();




const PORT = process.env.PORT || 3001 ;


app.listen(PORT , () => {
    console.log(`Our server is tunning on port ${PORT}`)
})




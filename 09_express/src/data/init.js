const mongoose = require('mongoose')
const {DB_CONNECTION_STRING} = require('../config')

require('../models/Meeting')

console.log(DB_CONNECTION_STRING)

mongoose.connect(DB_CONNECTION_STRING)
    .then(()=>{
        console.log('connected to DB')
    })
    .catch(error=>{
        console.log(error.message)
        process.exit(1)
    })




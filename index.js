const express = require('express')
const app = express()
const cors = require("cors");

app.use(cors());

app.use('/', require('./routes/index.js'))

app.listen(8080, () => {
    console.log('app listening on 8080')
})
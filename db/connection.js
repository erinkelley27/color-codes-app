const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/color_codes', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
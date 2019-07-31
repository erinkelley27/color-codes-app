const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Color = new Schema({
    name: String,
    hex: String,
    rgb: {
        r: Number,
        g: Number,
        b: Number
    },
    luminance: Number
})

module.exports = mongoose.model('Color', Color)
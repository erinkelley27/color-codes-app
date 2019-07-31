const Color = require('../models/Color')

module.exports = {
    index: (req, res) => {
        Color.find({})
            .then(colors => {
                res.json(colors)
            })
    },
    show: (req, res) => {
        Color.findOne({ name: req.params.name })
            .then(color => {
                res.json(color)
            })
    }
}
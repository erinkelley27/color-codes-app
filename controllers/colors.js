const Color = require('../models/Color')

module.exports = {
    index: (req, res) => {
        Color.find({})
            .then(colors => {
                res.json(colors)
            })
    },
    showString: (req, res) => {
        // do something about case senstivity
        Color.findOne({ name: req.params.name })
            .then(color => {
                res.json(color)
            })
    }
}
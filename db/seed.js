const Color = require('../models/Color')
const colorData = require('./colors.json')

Color.remove({})
    .then(() => {
        Color.create(colorData)
            .then(colors => {
                console.log(colors)
            })
            .catch(err => {
                console.log(err)
            })
    })
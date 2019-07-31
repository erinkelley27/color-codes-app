const axios = require('axios')
const fs = require('fs')
const url = 'https://api.color.pizza/v1/'

axios.get(url)
    .then(res => {
        console.log(res.data.colors)
        let colors = res.data.colors
        fs.writeFile('./db/colors.json', (JSON.stringify(colors)), err => {
            if (err) {
                console.log(err)
            } else {
                console.log('data has been written to json file')
            }
        })
    })
    .catch(err => {
        console.log(err)
    })

const express = require("express")
const router = express.Router()
const colorsController = require('../controllers/colors.js')

router.get('/', colorsController.index)
router.get('/name/:name', colorsController.showString)

module.exports = router
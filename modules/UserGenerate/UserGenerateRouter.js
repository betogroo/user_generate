var express = require('express')
var router = express.Router()
const UserGenerateController = require('./UserGenerateController')

router.get('/user-generate', UserGenerateController.index)
router.get('/user-generate/:amount', UserGenerateController.index)



module.exports = router
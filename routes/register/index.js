var express = require('express');
var router = express.Router();

var primaryRegister = require('./primary-register')

router.post('/', primaryRegister)

module.exports = router

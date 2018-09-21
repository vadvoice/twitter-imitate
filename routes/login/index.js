var express = require('express');
var router = express.Router();

var login = require('./login')

router.post('/', login)

module.exports = router

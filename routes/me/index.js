var express = require('express');
var router = express.Router();

var me = require('./me')

router.post('/', me)
router.get('/', function(req, res, next) {
	res.send('any reasong to ask that!!')
})

module.exports = router
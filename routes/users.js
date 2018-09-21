var express = require('express');
var users = require('../fakeDB/users')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});

module.exports = router;

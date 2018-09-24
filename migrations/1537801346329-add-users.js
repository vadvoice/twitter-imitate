'use strict'
var db = require('../config/db')

module.exports.up = function (next) {
  db.collection('users').insertOne({name: 'lime', email: 'lime@gmail.com', password: '1111'})
  next()
}

module.exports.down = function (next) {
  db.collection('users').remove()
  next()
}

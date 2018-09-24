'use strict'
var db = require('../config/db')

module.exports.up = function (next) {
  db.collection('posts').insertOne({content: 'content'})
  next()
}

module.exports.down = function (next) {
  db.collection('posts').remove()
  next()
}

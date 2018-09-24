const express = require('express');
const router = express.Router();

const list = require('./list')
const add = require('./add')
const update = require('./update')

router.get('/', list)
router.post('/add', add)
router.post('/update/:id', update)

module.exports = router
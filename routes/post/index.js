const express = require('express');
const router = express.Router();

const list = require('./list')
const update = require('./update')
const create = require('./create')

router.get('/', list)
router.post('/update/:id', update)
router.post('/create', create)

module.exports = router
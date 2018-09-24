const express = require('express');
const router = express.Router();

const list = require('./list')
const update = require('./update')

router.get('/', list)
router.post('/update/:id', update)

module.exports = router
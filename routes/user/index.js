const express = require('express');
const router = express.Router();

const me = require('./me')
const list = require('./list')
const update = require('./update')

router.get('/', list)
router.get('/me/:id', me)
router.post('/update/:id', update)

module.exports = router
const express = require('express');
const router = express.Router();
const jwt = require('middlewares/jwt');

const me = require('./me')
const auth = require('./auth')
const list = require('./list')
const friends = require('./friends')
const offerFriendship = require('./offerFriendship')
const update = require('./update')

// access only logged in users
router.use(jwt)

// routes
router.get('/', list)
router.get('/friends/:id', friends)
router.get('/offrer-friendship/:id', offerFriendship)
router.get('/auth', auth)
router.get('/me/:id', me)
router.post('/update/:id', update)

module.exports = router
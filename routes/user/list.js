const config = require('config/secret');
const mongoose = require('mongoose')

function list(req, res, next) {
	mongoose.model('User').find({}, (err, docs) => {
		if(err) res.status(500).end()
    	res.json({users: docs})
	})
}

module.exports = list;
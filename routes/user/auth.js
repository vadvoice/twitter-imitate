const config = require('config/secret');
const jwt = require('jsonwebtoken');

function list(req, res, next) {
	console.log('request: ', req.headers['token'], req.headers['refreshToken'])
	res.end('end')
}
module.exports = list;
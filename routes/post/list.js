const config = require('config/secret');
const postModel = require('models/Post')

function list(req, res, next) {
	postModel.find({})
		.then(result => {
			console.log('res: ', result)
			res.send(result)
		})
		.catch(err => console.error('err:', err))
}

module.exports = list;
const postModel = require('models/Post')

function list(req, res, next) {
	postModel.find()
		.sort('-createdAt')
		.populate({path: 'author', select: ['name', 'email', 'avatar']})
		.populate('comments')
		.exec(function (err, story) {
			if (err) {
				console.log('err: ', err)
				res.status(500).send(err)
			}
		
			res.send(story)
		
		  });
}

module.exports = list;
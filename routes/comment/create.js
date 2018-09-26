const commentModel = require('models/Comment')
const postModel = require('models/Post')

function create(req, res, next) {
    console.log(req.body)

    let newComment = new commentModel(req.body)
    newComment.save((err, comment) => {
        if(err) res.status(500)
        if(!comment) res.status(404).end()

        const preparedUpdateData = {
            '$push': {'comments': comment._id},
            '$inc': {'counters.message': 1}
        }

    	postModel.update({_id: req.body.target}, preparedUpdateData, (err, post) => {
        	if(err) res.status(500).send(err)
			console.log('updated post: ', post)
        	res.send(comment)
        })
    })
}

module.exports = create;
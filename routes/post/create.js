const postModel = require('models/Post');
const userModel = require('models/User');

function create(req, res, next) {
    let newPost = new postModel(req.body)
    console.log('body: ', req.body)
    newPost.save((err, post) => {
        if(err) res.status(500).send(err)
        userModel.find({_id: req.body.author}, (err, findedPost) => {
        	if(err) res.status(500).send(err)
        	console.log('findedPost:::', findedPost)
        })

        userModel.update({_id: req.body.author}, {'$push': {'posts': post._id}}, (err, saveStatus) => {
	        if(err) res.status(500).send(err)
	        console.log('result of saving!!!', saveStatus)
        	res.send(post)
        })
    })
}

module.exports = create;
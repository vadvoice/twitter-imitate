const postModel = require('models/Post');
const userModel = require('models/User');

function create(req, res, next) {
    const {author} = req.body
    let newPost = new postModel(req.body)
    
    newPost.save((err, post) => {
        if(err) res.status(500).send(err)

        console.log('saved post: ', post)

        userModel.updateOne({'_id': author}, {'$push': {'posts': post._id}}, (err, saveStatus) => {
	        if(err) res.status(500).send(err)
	        console.log('result of saving!!!', saveStatus)
        	res.send(post)
        })
    })
}

module.exports = create;
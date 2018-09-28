const UserModel = require('models/User');

function friends(req, res, next) {
	const {id} = req.params
	const Query = UserModel.find({})

	const queryStr = `this.following.length > 1 && this.following.indexOf(${id}) > 0`

	Query.$where(() => this['_id'] != id)
		.select(['name', 'email', 'following', 'followers'])
		.populate('following')
		.populate('followers')
		.limit(10)
		.exec((err, docs) => {
			if(err) {
				console.error('opps, error: ', err)
				res.status(500).send(err)
			}

			// TODO: filter in query request instated filter manualy
			const potentialFriends = docs.filter(doc => doc._id != id).filter(doc => !doc.followers.some(f => f._id == id))
			const friends = docs.filter(doc => doc._id != id).filter(doc => doc.followers.some(f => f._id == id))

			res.send({'friends': {
				potentialFriends,
				friends
			}})
		})
}
module.exports = friends
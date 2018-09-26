const postModel = require('models/Post');

function update(req, res, next) {
    const {id} = req.params
	const {user, actionName} = req.body
	const options = {
		upsert:true,
		runValidators: true
	}
	const prepareUpdateObj = {
		[actionName + 's']: user
	}

	const prepareUpdateCounters = {
		['counters.' + actionName]: 1
	}

	console.log('prepareUpdateObj:::', prepareUpdateObj)
    postModel.update({'_id': id}, {'$push': prepareUpdateObj, '$inc': prepareUpdateCounters}, options, (err, docs) => {
        if(err) res.status(500).end()
        return res.send({'result': 'succesfully saved'});
    })

}

module.exports = update;
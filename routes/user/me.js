const userModel = require('models/User');

function me(req, res, next) {
    const { id } = req.params
    if (!id) res.send(404).end()

    userModel.findOne({ _id: id })
        // .populate({
        //     path: 'posts',
        //     select: 'content',
        //     options: { sort: { name: -1 } }
        // })
        // .populate('following')
        .exec((err, user) => {
            if (err) {
                console.error(err)
                res.status(500)
            }
            console.log('me:::', user)
            res.send(user)
        })
}

module.exports = me;
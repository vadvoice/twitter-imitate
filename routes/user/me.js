const UserModel = require('models/User');

function me(req, res, next) {
    const { id } = req.params
    if (!id) res.send(404).end()

    UserModel.findOne({ _id: id })
        .populate('following')
        .populate('followers')
        .populate('posts')
        .exec((err, user) => {
            if (err) {
                console.error(err)
                res.status(500)
            }
            res.send(user)
        })
}

module.exports = me;
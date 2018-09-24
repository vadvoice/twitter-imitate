const config = require('config/secret');
const db = require('config/db');
const UserModel = require('models/User')

function user(req, res, next) {
    const {id} = req.params
    db.collection('users').insert({name: 'lime', email: 'lime@gmail.com', password: '1111'})

    UserModel.updateOne({"_id": id}, {...req.body}, (err, docs) => {
        if(err) res.status(500).end()
        return res.send("succesfully saved");
        returnUpdated()
    })
    
    
    function returnUpdated() {
        UserModel.findById({'_id': id})
            .then(user => res.json(user))
            .catch(err => res.status(500).write('oops!').send(err))
    }
}

module.exports = user;
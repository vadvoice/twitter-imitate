const fs = require('fs');
const db = require('config/db');
const UserModel = require('models/User');
// const mongoose = require('mongoose');

// const Grid = require('gridfs-stream');
// const GridFS = Grid(db, mongoose.mongo);

function user(req, res, next) {
    const {id} = req.params;
    const {avatar, following} = req.body;
    let params
    if(following) {
        const followUser = {
            '$push': {"following": following}
        }
        params = {...followUser}
        UserModel.update({'_id': following}, {'$push': {'followers': id}}, {upsert: true}, (err, updated) => {
            if(err) {
                console.error('err: ', err)
                res.status(500).end(err)
            }
            console.log('updated followers', updated)
            fireUpdating(params)
        })
     } else {
        fireUpdating(req.body)
     }


    function fireUpdating(params) {
         UserModel.updateOne({_id: id}, params, {safe: true, upsert: true}, (err, updated) => {
            if(err) res.status(500).end()
            console.log('updated', updated)
            res.send('updated')
        })
    }

    function returnUpdated() {
        UserModel.findById({'_id': id})
            .then(user => res.json(user))
            .catch(err => res.status(500).write('oops!').send(err))
    }
}

module.exports = user;
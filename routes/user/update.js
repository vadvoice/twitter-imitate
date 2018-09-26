const fs = require('fs');
const db = require('config/db');
const UserModel = require('models/User');
const mongoose = require('mongoose');

const Grid = require('gridfs-stream');
const GridFS = Grid(db, mongoose.mongo);

function user(req, res, next) {
    const {id} = req.params;
    const {avatar} = req.body;

    UserModel.updateOne({_id: id}, {...req.body}, (err, updated) => {
        console.log('updated')
        res.send('asdfsda')
    })

    function returnUpdated() {
        UserModel.findById({'_id': id})
            .then(user => res.json(user))
            .catch(err => res.status(500).write('oops!').send(err))
    }

    // put image
    // function putFile(path, name, callback) {
    //     var writestream = GridFS.createWriteStream({
    //         filename: name
    //     });
    //     writestream.on('close', function (file) {
    //       callback(null, file);
    //     });
    //     fs.createReadStream(path).pipe(writestream);
    // }
    // function logResult(arg1, arg2) {
    //     console.log('args:', arguments)
    // }
    // putFile(path, 'first', logResult)
}

module.exports = user;
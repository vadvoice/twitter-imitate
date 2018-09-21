var express = require('express');
var router = express.Router();
var User = require('../models/User')
var crypt = require('services/bcrypt')

router.post('/', function(req, res, next) {
    const { password, name, email } = req.body

    crypt.cryptPassword(password, (fail, hashedPassword) => {
        if(fail) res.status(500).send('failt on crypt password!')

        var newOneUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })

        newOneUser.save()
            .then(item => {
                res.status(200).send(item);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    })

});

router.get('/', function(req, res, next) {
    res.end('what are you want from me?')
});

module.exports = router;
var config = require('config/secret')
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose')
var crypt = require('services/bcrypt')

function login(req, res, next) {
    const { email, password } = req.body
    if(email && password) {
        mongoose.model('User').findOne({ email: email }).exec((err, findeduser) => {
            if (err) {
                res.send(err)
            }
            if(!findeduser) {
                res.status(400).end('invalid email or password')
                return
            }
            crypt.comparePassword(password, findeduser.password, (fail, compareStatus) => {
                if(fail) res.status(500).send('compare password error')

                if(compareStatus) {
                    const token = jwt.sign({
                        id: findeduser._id,
                        access: 'auth',
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1)
                      }, config.secret)
                    res.status(200).send({ token: token, ...findeduser._doc})
                } else {
                    res.status(404).send('invalid email or password')
                }
            })
        })
    } else {
        res.status(400).send('email and password is required')
    }
}

module.exports = login;
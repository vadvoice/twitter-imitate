var config = require('config/secret')
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose')
const UserModel = require('models/User');
var crypt = require('services/bcrypt')

function login(req, res, next) {
    const { email, password } = req.body
    if(email && password) {
        UserModel
        .findOne({ email: email })
        .populate('following')
        .populate('followers')
        .populate('posts')
        .exec((err, findeduser) => {
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
                    const user = {
                        name: findeduser.name,
                        email: findeduser.email
                    }
                    const token = jwt.sign(user, config.secret, {expiresIn: config.tokenLife})
                    const refreshToken = jwt.sign(user, config.refreshTockenSecret, {expiresIn: config.refreshTokenLife})
                    delete findeduser.password

                    res.status(200).send({token, refreshToken, ...findeduser._doc})
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
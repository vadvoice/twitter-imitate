var config = require('config/secret')
var jwt = require('jsonwebtoken');

function me(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    console.log('token: ', token)
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.status(200).send(decoded);
    });

}

module.exports = me;
const jwt = require('jsonwebtoken')
const config = require('config/secret')

module.exports = (req,res,next) => {
  const token = req.headers['token'] || req.body.token || req.query.token
  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
            return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
        }
      req.decoded = decoded;
      next();
    });
  } else {
    console.log('req.headers:::', req.headers)
    return res.status(403).send({
        "error": true,
        "message": 'No token provided.'
    });
  }
}
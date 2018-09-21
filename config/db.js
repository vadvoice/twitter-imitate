//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect('mongodb://ds241012.mlab.com:41012/bigbox', {
    useNewUrlParser: true,
    auth: {
        user: 'admin',
        password: 'Code@Master13'
    }
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports.db = db
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Rilly... without password?']
    },
    email: {
        type: String,
        required: [true, 'Rilly... without email?']
    },
    about: String,
    age: Number,
    company: String
});

var User = mongoose.model('User', userSchema);

module.exports = User
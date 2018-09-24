const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    profile: {
        age: Number,
        about: String,
        company: String,
    },
    address: {
        city: String,
        country: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    createdAt: Date,
    updatedAt: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    target: {
        model: String,
        id: mongoose.Schema.Types.ObjectId()
    },
    createdAt: Date,
    updatedAt: Date
});

const commentModel = mongoose.model('Comment', commentSchema)

module.exports = commentModel
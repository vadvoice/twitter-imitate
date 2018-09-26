const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    target: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    createdAt: Date,
    updatedAt: Date
});

const commentModel = mongoose.model('Comment', commentSchema)

module.exports = commentModel
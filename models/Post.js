const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Base = require('./Base')

const postSchema = new Schema({
    content: {type: String, required: true},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    retweets: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    hearts: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    mails: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    counters: {
        message: Number,
        retweet: Number,
        heart: Number,
        mail: Number
    },
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});

postSchema.pre('update', (next) => {
    console.log('action update!!')
    this.updatedAt = new Date
    console.log('this: ', this.updatedAt, this.content)
    next()
})


postSchema.pre('save', function(next) {
    console.log('action save!!')
    next()
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
var mongoose = require('mongoose');

var boyloveSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    type: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('boylove', boyloveSchema );
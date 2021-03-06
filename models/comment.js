var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    book_id: String,
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    }
});

module.exports = mongoose.model('Comment', commentSchema);
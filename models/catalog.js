var mongoose = require('mongoose');

var catalogSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    number: String,
    author: String,
    publishing:String,
    desc: String,
    type: String,
    seller: {
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

module.exports = mongoose.model('catalog', catalogSchema );
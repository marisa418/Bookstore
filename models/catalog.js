var mongoose = require('mongoose');

var catalogSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    number: Number,
    author: String,
    date :Date,
    publishing:String,
    num_pages:String,
    ISBN:String,
    desc: String,
    type: String,
    seller_id: String,
    seller_name: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('catalog', catalogSchema );
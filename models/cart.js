var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({   
    id_book:String,
    buyer:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    }
});

module.exports = mongoose.model('cart', cartSchema );
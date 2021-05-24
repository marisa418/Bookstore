var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    
        id_book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'catalog'
        },
       buyer: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('cart', cartSchema );
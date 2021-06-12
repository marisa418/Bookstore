var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({   
    id_book:String,
    purchaser_id:String,
    purchaser_name:String,
    
});

module.exports = mongoose.model('cart', cartSchema );
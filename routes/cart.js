var express = require('express'),
    router  = express.Router(),
    cart  = require('../models/cart');

    

router.get('/', function(req, res){
            res.render('cart.ejs');
        
});
        

router.post('/', isLoggedIn, function(req, res){

    var buyler = {
        id: req.user._id,
        username: req.user.username
    };
     var id_book = id_book;
     var newcart = {id_book: id_book,buyler: buyler};
     cart.create(newcart,function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
           res.redirect('/cart');
       }
    });
    });
 
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}



module.exports = router;
var express = require('express'),
    router  = express.Router(),
    middleware = require('../middleware'),
    cart  = require('../models/cart');

    

router.get('/', middleware.isLoggedIn, function(req, res){  
    var purchaser_id = req.user._id;
    cart.find({purchaser_id:purchaser_id},function(err, allcart){
        if(err){
            console.log(err);
        } else {
               catalog.find({},function(err, allcatalog){
        if(err){
            console.log(err);
        } else {
                res.render('cart.ejs', {catalog: allcatalog,cart: allcart});
         }                      
    });  
         }                        
    });    
});
        
router.get("/:id", function(req, res){
    cart.findById(req.params.id,function(err, foundcart){
        if(err){
            console.log(err);
        } else {
            
            res.render("show.ejs", {cart: foundcart});
        }
    });
});

router.post('/', middleware.isLoggedIn, function(req, res){
    var id_book = req.body.id_book;
    var purchaser_id = req.user._id;
    var purchaser_name = req.user.username;
     var newcart = {id_book: id_book, purchaser_id: purchaser_id,purchaser_name:purchaser_name};
     cart.create(newcart,function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
           res.redirect('back');
       }
    });
    });
 
    router.delete('/:id', middleware.isLoggedIn, function(req, res){
        cart.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.redirect('/cart');
            } else {
                res.redirect('/cart');
            }
        });
    });



module.exports = router;
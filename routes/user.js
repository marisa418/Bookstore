const   express = require('express'),
        router  = express.Router();
        catalog  = require('../models/catalog');
    

router.get('/', function(req, res){
    res.render('user.ejs');
});
        

router.get('/cart',function(req,res){
            res.render('cart.ejs');
});
module.exports = router;
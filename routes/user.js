const   express = require('express'),
        router  = express.Router(),
        catalog  = require('../models/catalog'),
        middleware = require('../middleware'),
        user  = require('../models/user');
    

router.get('/',middleware.isLoggedIn,  function(req, res){
    user.find({username :req.user.username }, function(err, alluser){
        if(err){
            console.log(err);
        } else {
            console.log(req.user.username);
            res.render('user.ejs', {user: alluser});
        }
    });
        


});
router.get('/shop',middleware.isLoggedIn, function(req, res){
    catalog.find({seller_id:req.user._id}, function(err, allcatalog){
        if(err){
            console.log(err);
        } else {
            res.render('shop.ejs', {catalog: allcatalog});
        }
    });
});

module.exports = router;
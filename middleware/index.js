var catalog = require('../models/catalog');
var middlewareObj = {};

middlewareObj.checkCatalogOwner = function(req, res, next){
    if(req.isAuthenticated()){
        catalog.findById(req.params.id, function(err, foundcatalog){
            if(err){
                
                res.redirect('back');
            } else {
                if(foundcatalog.seller_id==req.user._id || req.user.isAdmin) {
                    next();
                } else {
                    
                    res.redirect('back');
                }
            }
        });
    } else {
        
        res.redirect('back');
    }
}




middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'You need to sign in first!');
    res.redirect('/login');
}

module.exports = middlewareObj;
var catalog = require('../models/catalog');
var catalog = require('../models/user');
var middlewareObj = {};

middlewareObj.checkCatalogOwner = function(req, res, next){
    if(req.isAuthenticated()){
        catalog.findById(req.params.id, function(err, foundcatalog){
            if(err){
                
                res.redirect('back');
            } else {
                if(foundcatalog.seller_id==req.user._id ) {
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
    res.redirect('/login');
}
middlewareObj.isLoggedInAdmin = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login_admin');
}

module.exports = middlewareObj;
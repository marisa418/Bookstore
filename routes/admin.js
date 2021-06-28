var express = require('express'),
    router  = express.Router(),
    middleware = require('../middleware'),
    catalog  = require('../models/catalog'),
    user  = require('../models/user'),
    cart  = require('../models/cart');

    router.get('/', middleware.isLoggedInAdmin,function(req,res){
        catalog.find({},function(err, allcatalog){  
            if(err){    
            console.log(err);
            } else {
                res.render('admin/admin.ejs', {catalog:allcatalog});
               }
    })
    });

    router.get('/manage_user', middleware.isLoggedInAdmin,function(req,res){
        user.find({},function(err, alluser){  
            if(err){    
            console.log(err);
            } else {
                res.render('admin/manage_user.ejs', {user:alluser});
               }
    })
    });

    router.delete('/:id', middleware.isLoggedInAdmin, function(req, res){
        catalog.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.redirect('/admin');
            } else {
                res.redirect('/admin');
            }
        });
    });

    router.delete('/manage_user/:id', middleware.isLoggedInAdmin, function(req, res){
        user.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.redirect('/admin/manage_user');
            } else {
                res.redirect('/admin/manage_user');
            }
        });
    });



module.exports = router;
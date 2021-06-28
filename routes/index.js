var express = require('express'),
    router  = express.Router(),
    User    = require('../models/user'),
    catalog  = require('../models/catalog'); 
    middleware = require('../middleware'),
    passport=  require('passport');


router.get('/',function(req,res){
    catalog.find({}, function(err, allcatalog){
        if(err){
            console.log(err);
        } else {
            res.render('home.ejs', {catalog: allcatalog});
        }
    });
    });

router.get('/login',function(req,res){
    res.render('login.ejs');
});
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: true,
        failureFlash: true,
        failureFlash: 'Invalid username or password'
    }), function(res, res){       
});

router.get('/register',function(req,res){
    res.render('register.ejs');
});

router.post('/register', function(req, res){
    var newUser = new User({
        username: req.body.username,       
        email: req.body.email,
        phone: req.body.phone,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        address_information:
    [{
        address:"",
        province:"",
        district:"",
        postcode:"",
    }]
    });
    if(req.body.Admin_Code === 'topsecret') {
        newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/');
        });
    });
});


router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
});

router.get('/login_admin',function(req,res){
    res.render('login_admin.ejs');
});
router.post('/login_admin', passport.authenticate('local',
    {
        successRedirect: '/admin',
        failureRedirect: '/login_admin',
        successFlash: true,
        failureFlash: true,
        failureFlash: 'Invalid username or password'
    }), function(res, res){       
});



router.get('/logout_admin', function(req, res){
    req.logout();
    res.redirect('/login_admin');
});


module.exports = router;
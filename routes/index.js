var express = require('express'),
    router  = express.Router(),
    User    = require('../models/user'),
    catalog  = require('../models/catalog'); 
    middleware = require('../middleware'),
    passport=  require('passport');


router.get('/',function(req,res){
    res.render('home.ejs');
});

router.get('/login',function(req,res){
    res.render('login.ejs');
});
router.get('/register',function(req,res){
    res.render('register.ejs');
});


router.post('/register', function(req, res){
    var newUser = new User({username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender});
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

router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: true,
        failureFlash: true,
        failureFlash: 'Invalid username or password'
    }), function(res, res){       
});


router.get('/test',function(req,res){
    res.render('test.ejs');
});

module.exports = router;
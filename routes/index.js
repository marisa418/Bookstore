var express = require('express'),
    router  = express.Router(),
    User    = require('../models/user'),
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
    var newUser = new User({username: req.body.username});
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
    res.redirect('/');
});

router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/catalog',
        failureRedirect: '/login'
    }), function(res, res){       
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
module.exports = router;
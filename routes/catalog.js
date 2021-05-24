const   express = require('express'),
        router  = express.Router();
        catalog  = require('../models/catalog');
    

    router.get('/', function(req, res){
        catalog.find({}, function(err, allCollections){
            if(err){
                console.log(err);
            } else {
                res.render('catalog.ejs', {catalog: allCollections});
            }
        });
    });
        

router.get('/comedy',function(req,res){
    res.render('comedy.ejs');
});
router.get('/action',function(req,res){
    res.render('action.ejs');
});
router.get('/romance',function(req,res){
    res.render('romance.ejs');
});
router.get('/boylove',function(req,res){
    res.render('boylove.ejs');
});
router.get('/scifi',function(req,res){
    res.render('scifi.ejs');
});
router.get('/fantasy',function(req,res){
    res.render('fantasy.ejs');
});
router.get('/thriller',function(req,res){
    res.render('thriller.ejs');
});
router.get('/suspense',function(req,res){
    res.render('suspense.ejs');
});
router.get('/historical',function(req,res){
    res.render('historical.ejs');
});
router.get('/new',isLoggedIn,function(req,res){
    res.render('new.ejs');
});

router.post('/', isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    var type = req.body.type;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newcatalog = {name:name, image:image, desc: desc,type: type, author: author};
    catalog.create(newcatalog, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            res.redirect('/catalog');
        }
    });
});

router.get("/:id", function(req, res){
    catalog.findById(req.params.id,function(err, foundcatalog){
        if(err){
            console.log(err);
        } else {
            res.render("show.ejs", {catalog: foundcatalog});
        }
    });
});

Bookstore('catalog')
.find().toArray( (error, results) => {
    if(error) {
        throw error
    }   
    res.json(results)
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
module.exports = router;
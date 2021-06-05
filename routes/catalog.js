const   express = require('express'),
        router  = express.Router(),    
        multer = require('multer'),
        path = require('path'),
        storge = multer.diskStorage({
            destination:function(req,file,callback){
                callback(null,'./public/uploads/');
            },
            filename:function(req,file,callback){
                callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        }),
        imageFilter = function(req,file,callback){
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                return callback(new Error('Only JPG, jpeg, PNG and GIF image files'),false);
            }
            callback(null, true);
        },
        upload = multer({storage:storge,fileFilter:imageFilter}),
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
    catalog.find({type:'comedy'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('comedy.ejs', {catalog: allCollections});
        }
    });
});
router.get('/action',function(req,res){
    catalog.find({type:'action'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('action.ejs', {catalog: allCollections});
        }
    });
});
router.get('/romance',function(req,res){
    catalog.find({type:'romance'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('romance.ejs', {catalog: allCollections});
        }
    });
});
router.get('/boylove',function(req,res){
    catalog.find({type:'boylove'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('boylove.ejs', {catalog: allCollections});
        }
    });
});
router.get('/scifi',function(req,res){
    catalog.find({type:'scifi'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('scifi.ejs', {catalog: allCollections});
        }
    });
});
router.get('/fantasy',function(req,res){
    catalog.find({type:'fantasy'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('fantasy.ejs', {catalog: allCollections});
        }
    });
});
router.get('/thriller',function(req,res){
    catalog.find({type:'thriller'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('thriller.ejs', {catalog: allCollections});
        }
    });
});
router.get('/suspense',function(req,res){
    catalog.find({type:'suspense'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('suspense.ejs', {catalog: allCollections});
        }
    });
});
router.get('/historical',function(req,res){
    catalog.find({type:'historical'}, function(err, allCollections){
        if(err){
            console.log(err);
        } else {
            res.render('historical.ejs', {catalog: allCollections});
        }
    });
});
router.get('/new',isLoggedIn,function(req,res){
    res.render('new.ejs');
});

router.post('/', isLoggedIn,upload.single('image'), function(req, res){
    req.body.catalog.image = '/uploads/'+ req.file.filename;
    req.body.catalog.author = {
        id: req.user._id,
        username: req.user.username
    };
    //var newcatalog = {name:name, image:image, desc: desc,type: type, author: author};
    catalog.create(req.body.catalog,function(err, newlyCreated){
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

router.post('/', isLoggedIn, function(req, res){
    catalog.findById(req.params.id)
    var id_book = {id_book: req.catalog._id}
    var buyer = {buyer: req.user._id}

    var newcart= {buyer:buyer,id_book:id_book};
    cart.create(newcart, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            res.redirect('/user/cart');
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}


module.exports = router;
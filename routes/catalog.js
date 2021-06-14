const   express = require('express'),
        router  = express.Router();
        catalog  = require('../models/catalog');  
        multer = require('multer'),
        path = require('path'),
        middleware = require('../middleware'),
        storge = multer.diskStorage({
            destination:function(req,file,callback){
                callback(null,'./public/uploads/');
            },
            filename:function(req,file,callback){
                callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        }),
        imageFilter = function(req,file,callback){
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif|ico)$/i)){
                return callback(new Error('Only JPG, jpeg, PNG and GIF image files'),false);
            }
            callback(null, true);
        },
        upload = multer({storage:storge,fileFilter:imageFilter}),
        catalog  = require('../models/catalog');
    

router.get('/', function(req, res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({},function(err, allcatalog){  
            if(err){    
                console.log(err);
            } else {
                console.log(search);
                res.render('catalog.ejs', {catalog:allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'}},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('catalog.ejs', {catalog:allcatalog});
        }
    });
    }
    
});
        
router.get('/comedy',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'comedy'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('comedy.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'comedy'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('comedy.ejs', {catalog:allcatalog});
        }
    });
    }
    
});

router.get('/action',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'action'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('action.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'action'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('action.ejs', {catalog:allcatalog});
        }
    });
    }
    
});
router.get('/romance',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'romance'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('romance.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'romance'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('romance.ejs', {catalog:allcatalog});
        }
    });
    }    
});
router.get('/boylove',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'boylove'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('boylove.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'boylove'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('boylove.ejs', {catalog:allcatalog});
        }
    });
    }    
});
router.get('/scifi',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'scifi'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('scifi.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'scifi'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('scifi.ejs', {catalog:allcatalog});
        }
    });
    }    
});
router.get('/fantasy',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'fantasy'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('fantasy.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'fantasy'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('fantasy.ejs', {catalog:allcatalog});
        }
    });
    }    
});
router.get('/thriller',function(req,res){
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'thriller'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('thriller.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'thriller'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('thriller.ejs', {catalog:allcatalog});
        }
    });
    }    
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
    var search=req.query.search;
    if (search==undefined){
        catalog.find({type:'historical'}, function(err, allcatalog){
            if(err){
                console.log(err);
            } else {
                res.render('historical.ejs', {catalog: allcatalog});
            }
        });
    }else{
        catalog.find({name:{'$regex': '.*'+search+'.*'},type:'historical'},function(err, allcatalog){  
        if(err){    
            console.log(err);
        } else {
            console.log(search);
            console.log(allcatalog)
            res.render('historical.ejs', {catalog:allcatalog});
        }
    });
    }    
});


router.get('/new',middleware.isLoggedIn,function(req,res){
    res.render('new.ejs');
});

router.post('/', middleware.isLoggedIn,upload.single('image'), function(req, res){
    req.body.catalog.image = '/uploads/'+ req.file.filename;
    req.body.catalog.seller_id = req.user._id;
    req.body.catalog.seller_name= req.user.username;
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

router.get("/:id/edit", middleware.checkCatalogOwner, function(req, res){
    catalog.findById(req.params.id,function(err, foundcatalog){
        if(err){
            console.log(err);
        } else {   
            res.render("edit.ejs", {catalog: foundcatalog});
        }
    });
});
    
router.put('/:id', middleware.checkCatalogOwner,upload.single('image'),function(req, res){
    if(req.file){
        req.body.catalog.image = '/uploads/' + req.file.filename;
    }
    catalog.findByIdAndUpdate(req.params.id,req.body.catalog,function(err,updatecatalog){
        if(err){
            res.redirect('/user/shop');
        } else {
            res.redirect('/user/shop');
        }
    });
});

router.delete('/:id',  middleware.checkCatalogOwner, function(req, res){
    catalog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/user/shop');
        } else {
            res.redirect('/user/shop');
        }
    });
});


module.exports = router;
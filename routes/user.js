const   express = require('express'),
        router  = express.Router(),
        catalog  = require('../models/catalog'),
        middleware = require('../middleware'),
        cart  = require('../models/cart'),
        user  = require('../models/user'),
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
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif|ico)$/i)){
                return callback(new Error('Only JPG, jpeg, PNG and GIF image files'),false);
            }
            callback(null, true);
        },
        upload = multer({storage:storge,fileFilter:imageFilter});
    

router.get('/',middleware.isLoggedIn,  function(req, res){
    user.find({_id:req.user._id }, function(err, alluser){
        if(err){
            console.log(err);
        } else {
            res.render('user/user.ejs', {user: alluser});
        }
    });
        


});
router.get('/shop',middleware.isLoggedIn, function(req, res){
    catalog.find({seller_id:req.user._id}, function(err, allcatalog){
        if(err){
            console.log(err);
        } else {
            res.render('user/shop.ejs', {catalog: allcatalog});
        }
    });
});
router.get('/purchase_history',middleware.isLoggedIn, function(req, res){
            res.render('user/purchase_history.ejs');

});

router.put('/shop/:id',middleware.isLoggedIn,upload.single('image'),function(req, res){
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

router.delete('/shop/:id',middleware.isLoggedIn, function(req, res){
    catalog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/user/shop');
        } else {
            res.redirect('/user/shop');
        }
    });
});

router.get("/shop/:id/edit",middleware.isLoggedIn, function(req, res){
    catalog.findById(req.params.id,function(err, foundcatalog){
        if(err){
            console.log(err);
        } else {   
            res.render("user/edit.ejs", {catalog: foundcatalog});
        }
    });
});



router.get("/edit_address",middleware.isLoggedIn, function(req, res){    
            res.render("edit_address.ejs");
});
router.put('/',middleware.isLoggedIn,function(req, res){
    console.log(req.body.check_data);
    if(req.body.check_data=="address_info"){
    user.findByIdAndUpdate(req.user._id,{ $set: {address_information:
        {
            address:req.body.address,
            province:req.body.province,
            district:req.body.district,
            postcode:req.body.postcode,
        }}},function(err,updateuser){
        if(err){
            res.redirect('/user');
        } else {
            res.redirect('/user');
        }
    });
}
if(req.body.check_data=="user_info"){
    user.findByIdAndUpdate(req.user._id,{ $set:
        {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender,
        }},function(err,updateuser){
        if(err){
            console.log("000000");
            res.redirect('/user');
        } else {
            console.log("11111");
            res.redirect('/user');
        }
    });
}
});

module.exports = router;
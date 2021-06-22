const   express = require('express'),
        router  = express.Router(),
        comment  = require('../models/comment'),  
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
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="catalog";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
});
        
router.get('/comedy',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="comedy";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    
});

router.get('/action',function(req,res){   
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="action";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
});
router.get('/romance',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="romance";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
});
router.get('/boylove',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="boylove";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    } 
});
router.get('/scifi',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="scifi";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    } 
});
router.get('/fantasy',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="fantasy";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
});
router.get('/thriller',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="thriller";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }   
});
router.get('/suspense',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="suspense";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
});
router.get('/historical',function(req,res){
    var search=req.query.search;
    var min_price=req.query.min_price;
    var max_price=req.query.max_price;
    var page="historical";
    if (search==undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({type:page,price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({type:page,price:{$gte: min_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({type:page,price:{$gte: min_price},price:{$lte:max_price}},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }
    if (search!=undefined){
        if (min_price==undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price==undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price==undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
        if (min_price!=undefined && max_price!=undefined){
            catalog.find({name:{'$regex': '.*'+search+'.*'},price:{$gte: min_price},price:{$lte:max_price},type:page},function(err, allcatalog){  
                 if(err){    
                 console.log(err);
                 } else {
                     res.render(page+'.ejs', {catalog:allcatalog});
                    }
            });
        }
    }   
});


router.get('/new',middleware.isLoggedIn,function(req,res){
    res.render('new.ejs');
});

router.post('/', middleware.isLoggedIn,upload.single('image'), function(req, res){
    req.body.catalog.image = '/uploads/'+ req.file.filename;
    req.body.catalog.seller_id = req.user._id;
    req.body.catalog.seller_name= req.user.username;
    req.body.catalog.date= new Date();;
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
    catalog.findById(req.params.id).populate('comment').exec(function(err, foundcatalog){
        if(err){
            console.log(err);
        } else {
            comment.find({book_id:req.params.id},function(err, allcomment){
                if(err){
                    res.render('show.ejs', {comment: allcomment,catalog:foundcatalog});
                    console.log(err);
                } else {
                    res.render('show.ejs', {comment: allcomment,catalog:foundcatalog});
                 }                        
            }); 
        }
    });
    
});



router.post("/:id", middleware.isLoggedIn, function(req, res){
    catalog.findById(req.params.id, function(err, foundcatalog){
        if(err){
            console.log(err);
            res.redirect('/catalog');
        } else {
            var book_id =req.params.id;
            var text= req.body.text;
            var author={
                id: req.user._id,
                username: req.user.username
            };   
            var newcomment= {book_id:book_id,text:text,author:author};  
            comment.create(newcomment, function(err, comment){
                if(err) {
                    console.log(err);
                } else {
                    res.redirect('/catalog/'+ foundcatalog._id);
                }
            });
        }
    });
});




module.exports = router;
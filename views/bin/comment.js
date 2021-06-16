const   express = require('express'),
router  = express.Router({mergeParams: true}),
        comment  = require('../../models/comment'), 
        catalog  = require('../../models/catalog'),  
        middleware = require('../../middleware');

router.get('/new_comment',middleware.isLoggedIn,function(req,res){
    catalog.findById(req.params.id, function(err, foundcatalog){
        if(err){
            console.log(err);
        } else {
            res.render("new_comment.ejs", {catalog: foundcatalog});
        }
    });
});


router.post("/", middleware.isLoggedIn, function(req, res){
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
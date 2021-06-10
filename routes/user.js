const   express = require('express'),
        router  = express.Router();
        catalog  = require('../models/catalog');
    

router.get('/', function(req, res){
    res.render('user.ejs');
});
        

module.exports = router;
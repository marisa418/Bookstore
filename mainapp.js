const        express         = require('express');
const        app             = express();
const        mongoose        = require('mongoose');
const        passport        = require('passport');
const        methodOverride   = require('method-override');
const        LocalStrategy   = require('passport-local');
const        User            = require('./models/user');
const        bodyParser      = require('body-parser');
const        flash           = require('connect-flash');
var          catalogRoutes   = require('./routes/catalog');
var          indexRoutes     = require('./routes/index');
var          userRoutes     = require('./routes/user');
var          cartRoutes     = require('./routes/cart');


mongoose.connect('mongodb://localhost/BookStore',{useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(flash());

//Setting passport
app.use(require('express-session')({
    secret: 'secret is always secret.',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.use('/public', express.static('public'));
app.use('/catalog',catalogRoutes)
app.use('/user',userRoutes)
app.use('/cart',cartRoutes)
app.use('/',indexRoutes )


app.listen(3000,function(){
    console.log('is started.');
});
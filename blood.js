//Declaration
var express=require('express');
var app=express();
var loginController=require('./controllers/login-controller');
var homeController=require('./controllers/home-controller');
var logoutController=require('./controllers/logout-controller');
var adminController=require('./controllers/admin-controller');
var bodyParser=require('body-parser');
var expressSession=require('express-session');




var port=8000;

//Configuration
app.set('view engine','ejs');

//Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));
app.use(express.static('ext'));



//Routes


app.use('/',loginController);
app.use('/login',loginController);
app.use('/home',homeController);
app.use('/admin',adminController);
app.use('/logout',logoutController);

//Server Start-up
app.listen(port,function(){
	console.log("Server Started...");
});
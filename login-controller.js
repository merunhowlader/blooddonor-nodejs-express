var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');
var nodemailer = require('nodemailer');

var log_alart;
var reg_alart;
var for_alart;
router.get('/',function(req,res){
	for_alart="";
	

	//res.send("<script>alert('hello')</script>");
	//res.render('home/home',{name:req.session.un,list:result});
	res.render('login/index',{a:log_alart});

});
router.get('/forgot',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('login/forgot',{r:for_alart});
	
});


router.post('/forgot',function(req,res){
      var email={

      	email:req.body.email
      }
     if(email.email!=null){



     	console.log("merun");
	userModel.searchByemail(email,function(result){

		if(result.length>0)
		{
		var sto=req.body.email;
		var mymail="your blood donor passwor is:"+result[0].pass;


	var transporter = nodemailer.createTransport({
  service: 'gmail',
			  auth: {
			    user: 'aiubblooddonor@gmail.com',
			    pass: 'aiubatp3'
			  }
			});

			var mailOptions = {
			  from: 'aiubblooddonor@gmail.com',
			  to: sto,
			  subject: 'find blood donor',
			  text: mymail
			};

			transporter.sendMail(mailOptions, function(error, info){
			  if (error) {
			    res.redirect('#');
			  } else {

			  	for_alart="your password is send to your mail address"
			    
			    res.redirect('#');
			  }
			});


		 }
		 else{
		 		for_alart="check mail address"
		 }
    

    });
    }
    else{
    	for_alart=" give mail address"
        res.redirect('#');

    }

	//res.send("<script>alert('hello')</script>");
	
	
});



router.get('/register',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('register/index',{r:reg_alart});
	
});

//
router.post('/',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		email:req.body.email,
		password:req.body.password
	};
	console.log(user);
	userModel.validate(user,function(result){

		if(result.length>0)
		{ 

		/*var user={
		username:req.body.username,
		password:req.body.password,
		role:1,
	   };*/

		//userModel.validatetype(user,function(result){

		if(result[0].type==1)
		{ 
			req.session.email=req.body.email;
			req.session.name=result[0].name;
			req.session.division=result[0].divi;
			req.session.role=1;
           console.log("you are hear");
           log_alart="";
           res.redirect('/admin');
        	
		}
        else{
        	req.session.email=req.body.email;
        	req.session.name=result[0].name;
        	req.session.division=result[0].divi;
        	req.session.role=0;
        	log_alart="";
			res.redirect('/home');

        }
          //});


          
      //var type= mysqli_fetch_assoc(result);
      //var result=JSON.parse(result.jsonData);
      //console.log(result.id);
      //console.log(JSON.stringify(result));
		//console.log(obj);

					
		}
		else
		{   log_alart="invali id or password";
            res.redirect('/login');

		}

	});


	/*if(req.body.username==req.body.password)
	{
		req.session.un=req.body.username;
		res.redirect('/home');
	}
	else
	{
		res.redirect('/login');
	}*/


});


router.post('/getData',function(req,res){
	
	userModel.searchBydevition(req.body.divi,function(result){
		if(result.length>0)
		{
            //res.render('/login/register',{list:result});
			//res.redirect('/login/register',{list:result});
			//console.log(result);
			res.send(result);
		}
		else
		{
			res.send("");
		}
	});
	
	
});
router.post('/getemail',function(req,res){

	   var email={
	   	email:req.body.email
	   }
	
	userModel.getbyemail(email,function(result){
		if(result.length>0)
		{
           
			res.send(true);
		}
		else
		{
			res.send(false);
		}
	});
	
	
});
router.post('/register',function(req,res){
	var user={
		name:req.body.name,
		email:req.body.email,
		bg:req.body.bg,
		phn:req.body.phn,
		divi:req.body.divi,
		area:req.body.area,
		dob:req.body.dob,
		pass:req.body.pass
		//req.body.selectpicker

	       };
	console.log(user.area);
	console.log(user);
	//res.redirect("#");

   if(user.name==""||user.email==""||user.bg==""||user.divi==""||user.area==""||user.area=='nundefined'||user.dob==''||user.pass==''){
	 res.redirect('#');
	}
	else{
	


		if(user.pass.length>=6){


		userModel.register(user,function(status){
				if(status)
				{
					res.redirect('/login');

				}
				else
				{
					res.redirect('/login/register');
				}
			   });


	   }
	   else
		{
			res.redirect('/login/register');
		}

		


	}
  
});





module.exports=router;

var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');
var nodemailer = require('nodemailer');


router.get('*',function(req,res,next){
	if(req.session.email==null||req.session.role==1)
	{

		res.redirect('/login');
	}
	else
	{
		next();
	}
});


router.get('/',function(req,res){

    var divis={
    	division:req.session.division


             }

	userModel.getAll(divis,function(result){
		if(result.length > 0)
		{
			
			res.render('home/home',{name:req.session.name,email:req.session.email,post:result});
		}
		else
		{
			
			res.render('home/home',{name:req.session.name,email:req.session.email,post:result});
		}
	});
	

});
router.get('/changepass',function(req,res){
			
			res.render('profile/changepass',{email:req.session.email});
	

});
router.get('/bloodbank',function(req,res){
			
			res.render('home/bloodbank',{email:req.session.email});
	

});

router.post('/bloodbank',function(req,res){
	
	userModel.searchByArea(req.body.name,function(result){
		if(result.length>0)
		{
			console.log(result);
			res.send(result);
		}
		else
		{
			res.send("Not found...");
		}
	});
	
	
});

router.post('/changepass',function(req,res){
			
		var user={
    	   password:req.body.oldpass,
    	  email:req.session.email,

             }
             console.log(user);

	userModel.validate(user,function(result){
		if(result.length > 0)
		{
			var up={
    	    newpass:req.body.newpass,
    	    email:req.session.email,

             }
             console.log("is it work");


		userModel.update(up,function(result){
		if(result)
		{
			res.redirect('/home/profile');

		}
		else{
			res.redirect('/logout');

		}


		});
	    }
	else
		{
			
			res.redirect('/logout');
		}
	});
	

});
router.get('/profile',function(req,res){

    var email={
    	email:req.session.email

             }

	userModel.getbyemail(email,function(result){
		if(result.length > 0)
		{
			
			res.render('profile/profile',{name:req.session.name,email:req.session.email,mydata:result});
		}
		else
		{
			
			res.render('home/home',{name:req.session.name,email:req.session.email,post:result});
		}
	});
	

});






router.get('/postbloodrequest',function(req,res){
	res.render('home/postbloodrequest',{email:req.session.email});
});

router.get('/myrequest',function(req,res){
	
	var email={
    	email:req.session.email


             }

	userModel.getMyAll(email,function(result){
		if(result.length > 0)
		{
			
			res.render('home/myrequest',{name:req.session.name,email:req.session.email,post:result});
		}
		else
		{
			
			res.render('home/myrequest',{name:req.session.name,email:req.session.email,post:result});
		}
	});
});
router.get('/finddonor',function(req,res){
	res.render('home/finddonor',{name:req.session.name});
});
router.post('/finddonor',function(req,res){
	var donor={
        divi:req.body.divi,
		area:req.body.area,
		bg:req.body.bg

	}
	userModel.donorf(donor,function(result){
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
router.post('/postbloodrequest',function(req,res){
	 
	    var currentDate = new Date();

		var date = currentDate.getDate();
		var month = currentDate.getMonth(); //Be careful! January is 0 not 1
		var year = currentDate.getFullYear();

		var dateString =   year+ "-" +(month + 1) + "-" +date;
		
			 
	var bgreq={
		name:req.session.name,
		email:req.session.email,
		divi:req.body.divi,
		area:req.body.area,
		bg:req.body.bg,
		phn:req.body.phn,
		rdate:req.body.rdate,
		pdate:dateString
	};
	//console.log(email);


	console.log(bgreq);
	//res.redirect('#');
	userModel.postinsert(bgreq,function(status){
			if(status)
			{
				res.redirect('/home');

			}
			else
			{
				res.send('Error in updating...');
			}
		});


  
});





router.get('/email/:email',function(req,res){
	var semail=req.params.email;
	var mymail=req.session.email;



	var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aiubblooddonor@gmail.com',
    pass: 'aiubatp3'
  }
});

var mailOptions = {
  from: 'aiubblooddonor@gmail.com',
  to: 'merunhowlader@gmail.com',
  subject: 'find blood donor',
  text: mymail
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.redirect('/home');
  }
});

 res.redirect('/home');
	
});



router.post('/edit/:uname',function(req,res){
	
	var employe={
		uname:req.params.uname,
		name:req.body.name,
		contact:req.body.contact,
		password:req.body.password,
	};
     if(employe.name==""||employe.contact==""||employe.password==""){res.redirect('#');}
	else{
		userModel.update(employe,function(status){
			if(status)
			{
				res.redirect('/home');

			}
			else
			{
				res.send('Error in updating...');
			}
		});
	}
		
});



router.get('/delete/:pid',function(req,res){
	
	res.render('postDelate/postDelate',{pid:req.params.pid});
	
});


router.post('/delete/:pid',function(req,res){
	
	if(req.body.yes)
	{
		userModel.delete(req.params.pid,function(status){
			if(status)
			{
				res.redirect('/home/myrequest');
			}
			else
			{
				res.redirect('/home');
			}

		})
	}
	else
	{
		res.redirect('/home');
	}
	
});

router.post('/getData',function(req,res){
	
	userModel.searchByName(req.body.name,function(result){
		if(result.length>0)
		{
			console.log(result);
			res.send(result[0]);
		}
		else
		{
			res.send("Not found...");
		}
	});
	
	
});

module.exports=router;

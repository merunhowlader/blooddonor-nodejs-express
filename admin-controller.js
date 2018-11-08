var express=require('express');
var router=express.Router();
var adminModel=require.main.require('./models/admin-model');


router.get('*',function(req,res,next){
	if(req.session.email==null||req.session.role==0)
	{

		res.redirect('/login');
	}
	else
	{
		next();
	}
});
router.get('/',function(req,res){

	adminModel.getAll(function(result){
		if(result.length > 0)
		{
			
			res.render('admin/adminhome',{name:req.session.un,list:result});
		}
		else
		{
			res.render('admin/adminhome',{name:req.session.un,list:result});

			//res.redirect('/login');
		}
	});
	

});

/*router.get('/profile',function(req,res){
	var email={
		email:req.session.email
	}
	
	adminModel.profileAll(email,function(result){
		if(result.length > 0)
		{
			
			res.render('profile/profile',{email:req.session.email});
		}
		else
		{
			res.render('admin/adminhome',{email:req.session.email});

			//res.redirect('/login');
		}
	});
	

});*/

router.get('/passward',function(req,res){
	
	res.render('passward/pass',{email:req.session.email});
	
});



router.post('/passward',function(req,res){
	
	var users={
		email:req.session.email,
		passward:req.body.oldpass
	};
	console.log(users);     //if(employe.name==""||employe.contact==""||employe.password==""){res.redirect('#');}
	//else{
		adminModel.validate(users,function(result){
			if(result.length>0)
			{
				var up={
					newpass:req.body.newpass,
					email:req.session.email
				}
				console.log("Done?");
				adminModel.passUpdate(up,function(result){
					if(result){
						res.redirect('/login');
					}
					else{
						res.redirect('/login');
					}
				});

			}
			else
			{
				res.redirect('/login');
			}
		});
	//}
		
});


router.get('/view_user',function(req,res){

	adminModel.viewAll(function(result){
		if(result.length > 0)
		{
			
			res.render('view_user/v_user',{name:req.session.un,list:result});
		}
		else
		{
			res.render('view_user/v_user',{name:req.session.un,list:result});

			//res.redirect('/login');
		}
	});
	

});

router.get('/admin_delete/:email',function(req,res){
	
	res.render('admin_delete/index',{email:req.params.email});
	
});


router.post('/admin_delete/:email',function(req,res){
	
	if(req.body.yes)
	{
		adminModel.Admin_delete(req.params.email,function(status){
			if(status)
			{
				res.redirect('/admin/view_user');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/admin/view_user');
	}
	
});



router.get('/place',function(req,res){
	res.render('place/place');
});



router.post('/place',function(req,res){
	var place={
		divi:req.body.divi,
		area:req.body.area
	};

	adminModel.insert(place,function(status){
		if(status)
		{
			res.redirect('/admin/view_place');

		}
		else
		{
			//res.send('Not Created');
			res.redirect('/admin/place');
		}
	});
});
router.get('/view_place',function(req,res){

	adminModel.viewPlace(function(result){
		if(result.length > 0)
		{
			
			res.render('view_Place/allplace',{name:req.session.un,list:result});
		}
		else
		{
			res.render('view_place/allplace',{name:req.session.un,list:result});

			//res.redirect('/login');
		}
	});
	

});

router.get('/grp_regis',function(req,res){
	res.render('grp_regis/grp_registration');
});



router.post('/grp_regis',function(req,res){
	var grp_regis={
		gname:req.body.gname,
		email:req.body.email,
		phn:req.body.phn,
		divi:req.body.divi,
		area:req.body.area
	};

	adminModel.Bank(grp_regis,function(status){
		if(status)
		{
			res.redirect('/admin');

		}
		else
		{
			//res.send('Not Created');
			res.redirect('/admin/grp_regis');
		}
	});
});

router.get('/view_bank',function(req,res){

	adminModel.viewBank(function(result){
		if(result.length > 0)
		{
			
			res.render('view_bank/bank',{name:req.session.un,list:result});
		}
		else
		{
			res.render('view_bank/bank',{name:req.session.un,list:result});

			//res.redirect('/login');
		}
	});
	

});

router.get('/edit_bank/:id',function(req,res){
	var id=req.params.id;
	adminModel.getByBank(id,function(bank){
		console.log(bank);
		res.render('edit_bank/edit_bank',bank);
	});
	
});



router.post('/edit_bank/:id',function(req,res){
	
	var bank={
		id:req.params.id,
		gname:req.body.gname,
		email:req.body.email,
		phn:req.body.phn,
	};
     if(bank.gname==""||bank.email==""||bank.phn==""){res.redirect('#');}
	else{
		adminModel.updateBank(bank,function(status){
			if(status)
			{
				res.redirect('/admin/view_bank');

			}
			else
			{
				console.log("Error");
			}
		});
	}
		
});

router.get('/delete_bank/:id',function(req,res){
	
	res.render('delete_bank/delete_bank',{id:req.params.id});
	
});


router.post('/delete_bank/:id',function(req,res){
	
	if(req.body.yes)
	{
		adminModel.Bank_delete(req.params.id,function(status){
			if(status)
			{
				res.redirect('/admin/view_bank');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/admin/view_bank');
	}
	
});

router.get('/view_post',function(req,res){

	adminModel.viewPost(function(result){
		if(result.length > 0)
		{
			
			res.render('view_post/post',{name:req.session.un,list:result});
		}
		else
		{
			res.render('view_post/post',{name:req.session.un,list:result});

			//res.redirect('/login');
		}
	});
	

});


router.get('/post_delete/:pid',function(req,res){
	
	res.render('post_delete/delete_post',{pid:req.params.pid});
	
});


router.post('/post_delete/:pid',function(req,res){
	
	if(req.body.yes)
	{
		adminModel.Post_delete(req.params.pid,function(status){
			if(status)
			{
				res.redirect('/admin/view_post');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/admin/view_post');
	}
	
});

router.post('/getData',function(req,res){
	
	adminModel.searchByArea(req.body.name,function(result){
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

module.exports=router;
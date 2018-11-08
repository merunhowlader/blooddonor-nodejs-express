var express=require('express');
var router=express.Router();



router.get('/',function(req,res){

	req.session.email=null;
	req.session.name=null;
	res.redirect('/login');

});


module.exports=router;
var db=require('./db');

module.exports={

	validate:function(user,callback)
	{
		var sql="SELECT * from users WHERE email=? and pass=?";	
		db.getResult(sql,[user.email,user.password],function(result){
				if(result.length>0)
				{

					callback(result);
				}
				else
				{ 
					callback(result=0);
				}

		});
	},

	getAll:function(divis,callback)
	{     
		var sql="SELECT * from post WHERE divi=?";	
		db.getResult(sql,[divis.division],function(result){
				callback(result);

		});
	},
	getMyAll:function(email,callback)
	{     
		var sql="SELECT * from post WHERE email=?";	
		db.getResult(sql,[email.email],function(result){
				callback(result);

		});
	},
	searchByArea:function(name,callback)
	{
		var sql="SELECT * from bank WHERE area=?";	
		db.getResult(sql,[name],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	},
	
	postinsert:function(rgreq,callback)
	{  

		var sql="INSERT INTO post VALUES(?,?,?,?,?,?,?,?,?)";	
		db.execute(sql,[ ,rgreq.name,rgreq.email,rgreq.bg,rgreq.divi,rgreq.area,rgreq.phn,rgreq.pdate,rgreq.rdate],function(result){
				if(result)
				{

					callback(true);
				}
				else
				{
					console.log(result);
					callback(false);
				}

		});
	},
	register:function(user,callback)
	{  

		var sql="INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?,?)";	
		db.execute(sql,[,user.name,user.email,user.bg,user.phn,user.divi,user.area,user.dob,user.pass,null,null],function(result){
				if(result)
				{

					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	getbyemail:function(email,callback)
	{
		var sql="SELECT * from users WHERE email=?";	
		db.getResult(sql,[email.email],function(result){
				if(result.length>0)
				{
					callback(result);
				}
				else
				{
					callback([]);
				}

		});
	},

	update:function(up,callback)
	{
		var sql="UPDATE users SET pass=? where email=?";	
		db.execute(sql,[up.newpass,up.email],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},


	delete:function(pid,callback)
	{
		var sql="DELETE from post where pid=?";	
		db.execute(sql,[pid],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

    donorf:function(donor,callback)
	{
		
		var sql="SELECT * from users WHERE divi=? and area=? and bg=? ";	
		db.getResult(sql,[donor.divi,donor.area,donor.bg],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	},

    searchBydevition:function(divi,callback)
	{
		var sql="SELECT * from location WHERE division=?";	
		db.getResult(sql,[divi],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	},
	searchByemail:function(email,callback)
	{
		var sql="SELECT * from users WHERE email=?";	
		db.getResult(sql,[email.email],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	}
};


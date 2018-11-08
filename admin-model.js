var db=require('./db');

module.exports={

	validate:function(users,callback)
	{
		var sql="SELECT * from users WHERE email=? and pass=?";	
		db.getResult(sql,[users.email,users.passward],function(result){
				if(result.length>0)
				{

					//var session.ty=result[type];
					callback(result);
				}
				else
				{ console.log(result);
					callback(result=0);
				}

		});
	},

	getAll:function(callback)
	{
		var sql="SELECT * from users";	
		db.getResult(sql,[],function(result){
				callback(result);
		});
	},
	/*profileAll:function(email,callback)
	{
		var sql="SELECT * from users where email=?";
		db.execute(sql,[email.email],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},*/

	getById:function(users,callback)
	{
		var sql="SELECT * from users where id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					//if(result[0].type==1){
						callback(result[0]);
					/*}
					else
					{
						callback([]);
					}*/
					
				}
				else
				{
					callback([]);
				}

		});
	},

	passUpdate:function(up,callback)
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

	viewAll:function(callback)
	{
		var sql="SELECT * from users";	
		db.getResult(sql,[],function(result){
				callback(result);
		});
	},

	Admin_delete:function(email,callback)
	{
		var sql="DELETE from users where email=?";	
		db.execute(sql,[email],function(result){
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

	viewPost:function(callback)
	{
		var sql="SELECT * from post";	
		db.getResult(sql,[],function(result){
				callback(result);
		});
	},
	Post_delete:function(pid,callback)
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

	insert:function(location,callback)
	{  

		var sql="INSERT INTO location VALUES(?,?,?)";
		if(location.divi==""||location.area==""){
			callback(false);
		}	
		else{
			db.execute(sql,[,location.divi,location.area],function(result){
				if(result)
				{

					callback(true);
				}
				else
				{
					callback(false);
				}

			});
		}	
			
	},
	viewPlace:function(callback)
	{
		var sql="SELECT * from location";	
		db.getResult(sql,[],function(result){
				callback(result);
		});
	},
	getByBank:function(id,callback)
	{
		var sql="SELECT * from bank WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},

	Bank:function(bank,callback)
	{  

		var sql="INSERT INTO bank VALUES(?,?,?,?,?,?)";	
		if(bank.gname==""||bank.email==""||bank.phn==""||bank.divi==""||bank.area==""){
			callback(false);
		}
		else{
			db.execute(sql,[,bank.gname,bank.email,bank.phn,bank.divi,bank.area],function(result){
				if(result)
				{

					callback(true);
				}
				else
				{
					callback(false);
				}

			});
		}
	},

	viewBank:function(callback)
	{
		var sql="SELECT * from bank";	
		db.getResult(sql,[],function(result){
				callback(result);
		});
	},
	getByBank:function(id,callback)
	{
		var sql="SELECT * from bank WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},

	updateBank:function(bank,callback)
	{
		var sql="UPDATE bank SET gname=?,email=?,phn=? where id=?";
		/*if(bank.gname==""||bank.email==""||bank.phn==""){
			res.redirect('/#');
		}	
		else{*/
			db.execute(sql,[bank.gname,bank.email,bank.phn,bank.id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

			});
		//}
			
	},

	Bank_delete:function(id,callback)
	{
		var sql="DELETE from bank where id=?";	
		db.execute(sql,[id],function(result){
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

	postinsert:function(rgreq,callback)
	{  

		var sql="INSERT INTO users VALUES(?,?,?,?,?,?,?,?)";	
		db.execute(sql,[,rgreq.email,rgreq.bg,rgreq.divi,rgreq.area,rgreq.phn,rgreq.mes,rgreq.pdate,rgreq.rdate],function(result){
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

	/*getById:function(uname,callback)
	{
		var sql="SELECT * from employe WHERE uname=?";	
		db.getResult(sql,[uname],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},

	update:function(employe,callback)
	{
		var sql="UPDATE employe SET empname=?,contact=?,pass=? where uname=?";	
		db.execute(sql,[employe.name,employe.contact,employe.password,employe.uname],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},*/


	


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
	}
};

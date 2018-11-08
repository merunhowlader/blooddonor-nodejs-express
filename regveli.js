$(document).ready(function(){
	var fname=false;
	var dob=false;
	var femail=false;
	var fphn=false;
	var fpass=false;
	var fdivi=false;
	var farea=false;
	var fbg=false;

$("#name").blur(function(){

	var a = $("#name").val();
	var n=a.length;
	if(a==""){

		$("#ername").html("must be filled");
		$("#ername").css("color", "red");
	  


	  
	}
	else{

	var letters = /^[A-Za-z]+$/;
      if(a.match(letters))
      {
      	$("#ername").html("");
	   fname=true;
      
      }
      else
      {
      $("#ername").html( "Please input alphabet characters only");
	  $("#ername").css("color", "red");
      
      }
	
    
			  
		
	}

	


           
             //$("#ername").html(" select your age");

    
	});


$("#date").change(function(){

	var a = $("#date").val();
	console.log(a);
	var n=a.length;
	if(a!=""){
		 var today = new Date();
    var birthDate = new Date(a);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
     if(age<10){
     	$("#erdate").html("give your real age");
		$("#erdate").css("color", "red");
		

     }
     else{
     	$("#erdate").html("");
     	dob=true;

     }


	  
	}
	else{
	
      
	    var mes= " must be filled";
		$("#erdate").html(mes);
		$("#erdate").css("color", "red");
	 
		
	}

	


           
             //$("#ername").html(" select your age");

    
	});


$("#phn").blur(function(){

	var a = $("#phn").val();
	//console.log(a);
	var n=a.length;
	if(a!=""){

		if(a.length==11){
			fphn=true;
			$("#erphn").html("");

		

	    }
	    else{
	    $("#erphn").html(" give valid number");
		$("#erphn").css("color", "red");


	    }

     }
     else{
     	$("#erphn").html(" give valid number");
		$("#erphn").css("color", "red");

     }


    
	});

$("#email").blur(function(){

	var a = $("#email").val();
	//console.log(a);
	var n=a.length;
	if(a!=""){

		var n=a.indexOf("@");
	
	
	
		if(n<1){
				$("#eremail").html(" give valid email");
		        $("#eremail").css("color", "red");
				
			 
			}
           else{  





     $.ajax({
		url:"/login/getemail",
		method:"post",
		data:{
			email:$('#email').val()
		},
		success:function(res){
            
			if(res){
			 $("#eremail").html("email address is already taken");
			 $("#eremail").css("color", "red");
			
              }
           else{
            femail=true;
            $("#eremail").html("");

              }
		            
			

			//
		
	           }
	
             });
			
				
		   

		      }			
			

		

     }
     else{
     	$("#eremail").html(" give valid email");
		$("#eremail").css("color", "red");

     }


    
	});




$("#pass").change(function(){

	var a = $("#pass").val();
	if(a!=""){

		if(a.length>5){
			fpass=true;
			$("#erpass").html("");

		

	    }
	    else{
	    $("#erpass").html(" password should be atlist 6 digit");
		$("#erpass").css("color", "red");


	    }

     }
     else{
     	$("#erpass").html(" give password");
		$("#erpass").css("color", "red");

     }


    
	});


   $("#divi").click(function(){

	var a = $("#divi").val();
	if(a==""){
			
        $("#erdivi").html("select devision");
		$("#erdivi").css("color", "red");

		

	    }
	    else{
	    	fdivi=true;
			$("#erdivi").html("");
	    

	    }
    
	});


   $("#area").click(function(){

	var a = $("#area").val();
	if(a==""){
			
        $("#erarea").html("select area");
		$("#erarea").css("color", "red");

		

	    }
	    else{
	    	farea=true;
			$("#erarea").html("");
	    

	    }
    
	});
   $("#bg").click(function(){

	var a = $("#bg").val();
	if(a==""){
			
        $("#erbg").html("select Blood group");
		$("#erbg").css("color", "red");

		

	    }
	    else{
	    	fbg=true;
			$("#erbg").html("");
	    

	    }
    
	});
   /*function validateForm() {

   	var ok=true
   	
	if(fname!=true||femail!=true||dob!=true||fphn!=true||fpass!=true||fdivi!=true||farea!=true||fbg!=true)
	{
	$("#notice").html("give all valid value");
	$("#notice").css("color", "red");


       ok=false
       return ok;
           }

	}*/


	$(document).on("submit", "form", function(e){
		var ok=true;
		
    
    if(fname!=true||femail!=true||dob!=true||fphn!=true||fpass!=true||fdivi!=true||farea!=true||fbg!=true)
	{
		e.preventDefault();
		ok=false;
		alert('give all information');
	}
    
    

    	return ok;
            
           });

    


     



});



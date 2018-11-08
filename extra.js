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
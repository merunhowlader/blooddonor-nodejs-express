$(document).ready(function(){
	
	//var dob=false;
	var fgname=false;
	var femail=false;
	var fphn=false;
	var fdivi=false;
	var farea=false;
	//var fbg=false;



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
	   fgname=true;
      
      }
      else
      {
      $("#ername").html( "Please input alphabet characters only");
	  $("#ername").css("color", "red");	
	}
}
});

$("#email").blur(function(){

	var a = $("#email").val();
	//console.log(a);
	var n=a.length;
	if(a==""){
		$("#eremail").html(" give valid email");
			$("#eremail").css("color", "red");
		}
		
	 else{  
	 	var n=a.indexOf("@");
	
	
	
		if(n<1){
				$("#eremail").html(" give valid email");
		        $("#eremail").css("color", "red");
				
			 
			}
           else{  

           	$("#eremail").html("");
	   		femail=true;

		 	}
        }
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

$(document).on("submit", "form", function(e){
		var ok=true;
		
    
    if(fgname!=true||femail!=true||fphn!=true||fdivi!=true||farea!=true)
	{
		e.preventDefault();
		ok=false;
		alert('give all information');
	}
    
    

    	return ok;
            
           });

});
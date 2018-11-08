$(document).ready(function(){
	
	var fpass=false;

$("#newpass").blur(function(){

	var a = $("#newpass").val();
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

    $(document).on("submit", "form", function(e){
		var ok=true;
		
    
    if(fpass!=true)
	{
		e.preventDefault();
		ok=false;
		alert('give all information');
	}
    
    

    	return ok;
            
         });


  
     



});



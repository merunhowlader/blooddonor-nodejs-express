$(document).ready(function(){

	var fdivi=false;
	var farea=false;






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


   $("#area").blur(function(){

	var a = $("#area").val();
	if(a==""){
			
        $("#erarea").html("must be fill");
		$("#erarea").css("color", "red");

		

	    }
	    else{
	    	farea=true;
			$("#erarea").html("");
	    

	    }
    
	});

$(document).on("submit", "form", function(e){
		var ok=true;
		
    
    if(fdivi!=true||farea!=true)
	{
		e.preventDefault();
		ok=false;
		alert('give all information');
	}
    
    

    	return ok;
            
           });

});
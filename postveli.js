$(document).ready(function(){
	
	var dob=false;
	var fphn=false;
	var fdivi=false;
	var farea=false;
	var fbg=false;



$("#date").change(function(){

	var a = $("#date").val();
	console.log(a);
	var n=a.length;
	if(a!=""){

        dob=true;
     	$("#erdate").html("");
     	

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
		
    
    if(dob!=true||fphn!=true||fpass!=true||fdivi!=true||farea!=true||fbg!=true)
	{
		e.preventDefault();
		ok=false;
		alert('give all information');
	}
    
    

    	return ok;
            
           });

    


     



});



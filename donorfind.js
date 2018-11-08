$(document).ready(function(){

$("#d").click(function(){
	var divi=$('#divi').val();
	var area=$('#area').val();
	var bg=$('#bg').val();
	//console.log("find is not working");
	$.ajax({
		url:"/home/finddonor",
		method:"post",
		data:{
			"divi":divi,"bg":bg,"area":area
			
		},
		success:function(res){

             var b=""
             var c="no Dolor was Found in THIS AREA"
             console.log(res);
            
			if(res!=""){
			
				for( var k="0";k<res.length;k++){
					
                             
							var a="<br/><h3>name: "+res[k].name +" </h3><p> phone number: "+res[k].phn +"  |    |   Email Address: "+res[k].email +" </p><br/>";
							  b=b+a;
							 
							}
							
               
               $("#donorshow").html(b);
           }
           else{
             $("#donorshow").html(b);

           }

	           }
	
        });
});


});
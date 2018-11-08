$(document).ready(function(){

$("#divi").change(function(){
	/* age cal
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
	*/

	$.ajax({
		url:"/login/getData",
		method:"post",
		data:{
			divi:$('#divi').val()
		},
		success:function(res){
             var b=" <option value='' selected></option><br/>"
            
			if(res!=""){
			
				for( var k="0";k<res.length;k++){
					
                             
							 var a="<option value="+res[k].area +">"+res[k].area +"</option><br/>";
							  b=b+a;
							 
							}
							

               $("#area").html(b);
           }
           else{
             $("#area").html(b);

           }
		            
			

			//
		
	           }
	
        });


	});






});

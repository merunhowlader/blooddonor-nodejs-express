$(document).ready(function(){

$("#ok").keyup(function(){
	

	$.ajax({
		url:"/home/bloodbank",
		method:"post",
		data:{
			name:$('#ok').val()
		},


		success:function(res){

			
			var a="";
			
				for(i=0;i<res.length;i++){
					var b ="<h3> bloodbank name :"+res[i].gname+"<br/>email:   "+res[i].email+"   Phone number "+res[i].phn+" Division "+res[i].divi+"</br>";
					a=a+b;
				}
				$("#par").html(a);

			
			//document.write(res);
		}
	});
});


});
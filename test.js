$(document).ready(function(){

$("button").click(function(){
	

	$.ajax({
		url:"/admin/getData",
		method:"post",
		data:{
			name:$('#nam').val()
		},


		success:function(res){
			var a="<table border='1'><tr><th>ID</th><th>Blood Bank Name</th><th>Email</th><th>Contact</th><th>Division</th><th>Area</th></tr>";
			var c="</table>"
				for(i=0;i<res.length;i++){
					var b ="<tr><td>"+res[i].id+"</td> <td>"+res[i].gname+"</td><td>"+res[i].email+"</td> <td>"+res[i].phn+"</td> <td>"+res[i].divi+"</td><td>"+res[i].area+"</td></tr>";
					a=a+b;
				}
				a=a+c;
				$("#par").html(a);

			
			//document.write(res);
		}
	});
});


});
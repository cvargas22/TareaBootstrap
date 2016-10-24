var basePath = "http://146.83.216.162:8080/";

$(document).ready(function(){
	$.ajax({
		url: basePath + "users/",
		type: "GET",
		dataType: "JSON",
		success: function(data){
			$.each(data.data, function(index, item){
				addCard(item.first_name, item.last_name, item.comment, item.img, item._id);
			});

		},
		error:function(){

		}
	});
	var addCard = function(firstName, lastName, content, image, id){
		var card = '<div class="col-sm-12 col-md-4 " id ="'+id+'">' +
			'<div class="card-column">'+
          '<div class="card">' +
              '<img class="card-img-top img-fluid" src="'+image+'" alt="Card image cap">' +
              '<div class="card-block ">' +
              	'<h4 class="card-title">'+ firstName + " " + lastName +'</h4>' +
              	'<p class="card-text">' +content+'</p>' +
              	'<a href="#" class="btn btn-primary">Go somewhere</a>' +
           	  '</div>' +
          '</div>' +
        '</div>';
        $("#tar").append(card); 
	}

});


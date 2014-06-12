$(document).ready(function(){


	

	$(".but").click(function(){
	
	if ($(".text").val() != "")
		{
		var elt = $(".text").val();
		var fin = $("<li></li>");
		var num = $("<p></p>");
		var image = $("<img src= 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdZJwFeAlT0bzshZ7RPDKeylolDZjvnijQ2khqNE93cldf6eYO'/>");
		$(num).text(elt);
		$(num).addClass("element");
		$(fin).append(num).append(image);
		$("ul").append(fin);
		$(".text").val("");
		} else {
		alert("Please enter an item");
		}
	});

	$(document).keydown(function(e){
	
	if (e.keyCode==13){
	
		if ($(".text").val() != "")
		{
		var elt = $(".text").val();
		var fin = $("<li></li>");
		var num = $("<p></p>");
		var image = $("<img src= 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdZJwFeAlT0bzshZ7RPDKeylolDZjvnijQ2khqNE93cldf6eYO'/>");
		$(num).text(elt);
		$(num).addClass("element");
		$(fin).append(num).append(image);
		$("ul").append(fin);
		$(".text").val("");
		} else {
		alert("Please enter an item");
		}
	}
	
	});
	
});

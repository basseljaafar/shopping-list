$(document).ready(function(){

	$(".but").mouseenter(function(){
	$(this).addClass("big");
	});
	
	$(".but").mouseleave(function(){
	$(this).removeClass("big");
	});
	
	$(".but").mousedown(function(){
	
	if ($(".text").val() != "")
		{
		var fin = "global";
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
	
	$("ul").on("mouseenter", "li", function(){
	$(this).find("img").addClass("display");
	});
	
	$("ul").on("mouseleave", "li", function(){
	$(this).find("img").removeClass("display");
	});
	
	$("ul").on("mouseenter", "img", function(){
	$(this).addClass("op");
	});
	
	$("ul").on("mouseleave", "img", function(){
	$(this).removeClass("op");
	})
	
	$("ul").on("mouseup","img", function(){
	$(this).parent().slideUp("fast");
	});
	
	$("ul").on("mousedown", "p", function(){
	$(this).toggleClass("trial");
	$(this).parent().toggleClass("color");
	});
	
});

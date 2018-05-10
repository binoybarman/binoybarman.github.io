$(document).ready(function(){

	$("#home-nav").click(function(){
		$(".middle-content-home").show();
		$(".middle-content-edu").hide();
		$(".middle-content-cp").hide();
		$(".middle-content-research").hide();
		$(".middle-content-personal").hide();
		$(".middle-content-contact").hide();
		$(".middle-content-home").addClass("active");
		$(".middle-content-edu").removeClass("active");
		$(".middle-content-research").removeClass("active");
		$(".middle-content-personal").removeClass("active");
		$(".middle-content-contact").removeClass("active");
	});

	$("#cp-nav").click(function(){
		$(".middle-content-home").hide();
		$(".middle-content-cp").show();
		$(".middle-content-edu").hide();
		$(".middle-content-research").hide();
		$(".middle-content-personal").hide();
		$(".middle-content-contact").hide();
		$(".middle-content-home").removeClass("active");
		
		$(".middle-content-cp").addClass("active");
		$(".middle-content-research").removeClass("active");
		$(".middle-content-personal").removeClass("active");
		$(".middle-content-contact").removeClass("active");
	});
	$("#edu-nav").click(function(){
		$(".middle-content-home").hide();
		$(".middle-content-cp").hide();
		$(".middle-content-edu").show();
		$(".middle-content-research").hide();
		$(".middle-content-personal").hide();
		$(".middle-content-contact").hide();
		$(".middle-content-home").removeClass("active");
		
		$(".middle-content-edu").addClass("active");
		$(".middle-content-research").removeClass("active");
		$(".middle-content-personal").removeClass("active");
		$(".middle-content-contact").removeClass("active");
	});

	$("#research-nav").click(function(){
		$(".middle-content-home").hide();
		$(".middle-content-cp").hide();
		$(".middle-content-edu").hide();
		$(".middle-content-research").show();
		$(".middle-content-personal").hide();
		$(".middle-content-contact").hide();
		$(".middle-content-home").removeClass("active");
		$(".middle-content-edu").removeClass("active");
		$(".middle-content-research").addClass("active");
		$(".middle-content-personal").removeClass("active");
		$(".middle-content-contact").removeClass("active");
	});

	$("#personal-nav").click(function(){
		$(".middle-content-home").hide();
		$(".middle-content-cp").hide();
		$(".middle-content-edu").hide();
		$(".middle-content-research").hide();
		$(".middle-content-personal").show();
		$(".middle-content-contact").hide();
		$(".middle-content-home").removeClass("active");
		$(".middle-content-edu").removeClass("active");
		$(".middle-content-research").removeClass("active");
		$(".middle-content-personal").addClass("active");
		$(".middle-content-contact").removeClass("active");

	});

	$("#contact-nav").click(function(){
		$(".middle-content-home").hide();
		$(".middle-content-edu").hide();
		$(".middle-content-research").hide();
		$(".middle-content-personal").hide();
		$(".middle-content-contact").show();
		$(".middle-content-home").removeClass("active");
		$(".middle-content-edu").removeClass("active");
		$(".middle-content-research").removeClass("active");
		$(".middle-content-personal").removeClass("active");
		$(".middle-content-contact").addClass("active");
	});

});

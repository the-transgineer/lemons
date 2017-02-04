$(document).ready(function (){
  $(".lemon").mouseenter(function (){
	$(".shadow").fadeIn();
	$(".lemon").transition({y:'-20px'});
  });
  $(".lemon").mouseout(function (){
	$(".shadow").fadeOut();
	$(".lemon").delay(100).transition({y:'20px'});
  });

  $(".lemon").click(function (){
	$("#why").fadeOut();
  });
    
  $(".lemon-slice").click(function (){
	$("#why2").fadeOut();
	$("#why3").delay(400).fadeIn();
	setTimeout( function (){
	  $(".wrapper").addClass("wrapper-move");
      $(".lemon-slice").addClass("lemon-rotate");
	}, 1500); 
  });
});

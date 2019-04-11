$( document ).ready(function() {
	
	$(".clearable").each(function() {
  
	  var $inp = $(this).find("input"),
		  $cle = $(this).find(".clearable__clear");

	  $inp.on("input", function(){
		$cle.toggle(!!this.value);
	  });

	  $cle.on("touchstart click", function(e) {
		e.preventDefault();
		$inp.val("").trigger("input");
	  });

	});
	
	$(".show_pass").click(function() {
		if ($(".show_pass").hasClass("hidden") === false){
			$(".input_mk").attr("type","text");
	  		$(".show_pass").addClass("hidden");
		}
		else{
			$(".input_mk").attr("type","password");
	  		$(".show_pass").removeClass("hidden");
		}
		
	});
	
	 //$("input.form-control").focus(function() {
//      $('.link_footer').addClass('hide');       
//    });
//	
//	$('input.form-control').blur(function(){
//	  $('.link_footer').removeClass('hide');
//	});
    
});

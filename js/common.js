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
		if ($(this).hasClass("hidden") === false){
			$(this).parent('.group_form_null ').find(".input_mk").attr("type","text");
	  		$(this).addClass("hidden");
		}
		else{
			$(this).parent('.group_form_null ').find(".input_mk").attr("type","password");
	  		$(this).removeClass("hidden");
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

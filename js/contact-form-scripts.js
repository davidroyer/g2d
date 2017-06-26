(function($) {
  
	"use strict";

	$(document).ready(function() {
	
		
		// CONTACT FORM SUBMISSION

		$("#contact-form").submit(function() {
			var str = $(this).serialize();
			$.ajax({
				type: "POST",
				url: "php/contact.php",
				data: str,
				success: function(msg) {
					var result = '';
					if(msg === 'OK') {
						result = '<div class="form-feedback form-success">All good, message sent!</div>';
						
				  	} else {
						result = msg;
				  	}
				  	$("#contact-form")[0].reset();
				  	$('.message__container').html(result);
				  	$('.message__container').addClass('show-message');
				  	$('.form-success').fadeIn(500);
				  	$('.form-success').delay(2000).fadeOut(700, removeContainerClass);
			    }
			});
			return false;
		});

		function removeContainerClass() {
			$('.message__container').removeClass('show-message');
		}
		// END OF SCRIPTS
	});
  

})(jQuery);
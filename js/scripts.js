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
						$('input[type="submit"]').hide();
				  	} else {
						result = msg;
				  	}
				  	$('#contact-error').html(result);
			    }
			});
			return false;
		});


		// END OF SCRIPTS
	});
  

})(jQuery);
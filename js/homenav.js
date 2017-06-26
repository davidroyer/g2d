
$(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});



$(document).ready(function() {
    
    $(window).scroll(function() {

        if ($(this).scrollTop()>40)
         {
            $('.contact-info-nav').slideUp(600);
         }
         
        else
         {
         $('.contact-info-nav').slideDown(600);
         }
     });
       
});
    $(document).ready(function() {
        if ($('.contact-info-nav-no-hide').css("display") == "none" )
         {
            $('.contact-info-nav').css('opacity', '1');
          }
        else 
          {
          $('.contact-info-nav').hide();
          }
    });



 



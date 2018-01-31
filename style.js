$(document).ready(function(){

$(".submit-btn").click(function(){
	
	
});



    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
 $(".panel_part").hide();
  $(".less_part").hide();
  $(".about_background_2").hide();
$(".more_woman").click(function(){
	$(".less_part").show();
	$(".panel_part").show();
	$(".more_woman").hide();
	
	 $(".about_background_2").hide();
	 $(".first_form").hide();
});







  
});
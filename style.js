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
  $(".continue_part").hide();
 $(".dentist_part").hide();
 
 
$(".more_woman").click(function(){
	$(".continue_part").show();
	$(".panel_part").show();
	$(".more_woman").hide();
	$(".dentist_part").hide();
	 $(".first_form").hide();
});

$(".continue_part").click(function(){
	$(".dentist_part").show();
	$(".panel_part").hide();
	
});//hide shoe end





$("#occupationSelect").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".subDiv").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".subDiv").hide();
            }
        });
    }).change();
	
	
	// dental field category change
	
	$("#dentalFieldCategory").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "hygienist"){
                $(".hygiene_exam").show();
                
            } else{
                $(".hygiene_exam").hide();
            }
        });
    }).change();
		// FULLTIME change
	
	$("#dentalFieldFulltime").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "fulltime_val"){
                $(".fullTime").show();
                
            } else{
                $(".fullTime").hide();
            }
        });
    }).change();
			// therapist sub div change
	
	$("#therapistSubPlease").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "please_val"){
                $(".therapist_sub").show();
                
            } else{
                $(".therapist_sub").hide();
            }
        });
    }).change();
	//diet part
	
	$("#otherDiet").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "Nutrition_val"){
                $(".dietSub").show();
                
            } else{
                $(".dietSub").hide();
            }
        });
    }).change();
	
	//hospital part
	
	$("#hospital_administator").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "hospitalSub"){
                $(".hospiSub").show();
                
            } else{
                $(".hospiSub").hide();
            }
        });
    }).change();
	//administator_sub part
	
	$("#administator_sub").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "administratorSub"){
                $(".administrator_ans").show();
                
            } else{
                $(".administrator_ans").hide();
            }
        });
    }).change();
	
		
	$("#administator_sub").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "otherMedical"){
                $(".otherMedical_ans").show();
                
            } else{
                $(".otherMedical_ans").hide();
            }
        });
    }).change();
	//health plan
		$("#healthPlan").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "healthPlan_val"){
                $(".helthy_many").show();
                
            } else{
                $(".helthy_many").hide();
            }
        });
    }).change();
	
	$("#healthPlan").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "healthDescribeVal"){
                $(".healthDescribe").show();
                
            } else{
                $(".healthDescribe").hide();
            }
        });
    }).change();
	//pharma
	$("#fulltimePharma").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue === "fulltimePharma_val"){
                $(".fullPharma").show();
                
            } else{
                $(".fullPharma").hide();
            }
        });
    }).change();

	



  
});
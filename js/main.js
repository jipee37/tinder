$(document).ready(function() {

// Hide Overlay on Video Play
	$('#video_background').on('play', function() {
		$('.overlay').css('opacity', 0);
	});	



// Display other languages on click
  $("nav li.active a").on('click', function(e) {
    e.preventDefault();
    $('nav li:not(.active)').slideToggle(400);
    // $(this).closest('li').siblings('li').slideToggle(400);
  });

// Arrow Down Button
  
   $('.arrow_down').on('click', function(e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    	
  });
});


//Gestion scroll avec 2 boutons

// $(function() {
	// the element inside of which we want to scroll
        // var $elem = $('#content');

        // show the buttons
	// $('#nav_up').fadeIn('slow');
	// $('#nav_down').fadeIn('slow');  

        // whenever we scroll fade out both buttons
	// $(window).bind('scrollstart', function(){
	// 	$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
	// });
        // ... and whenever we stop scrolling fade in both buttons
	// $(window).bind('scrollstop', function(){
	// 	$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
	// });

        // clicking the "down" button will make the page scroll to the $elem's height
	// $('#nav_down').click(
	// 	function (e) {
	// 		$('html, body').animate({scrollTop: $elem.height()}, 800);
	// 	}
	// );
        // clicking the "up" button will make the page scroll to the top of the page
	// $('#nav_up').click(
	// 	function (e) {
	// 		$('html, body').animate({scrollTop: '0px'}, 800);
	// 	}
	// );
// });

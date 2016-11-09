$(document).ready(function() {
	
	// Display other languages on click
  $("nav li.active a").on('click', function(e) {
    e.preventDefault();
    $('nav li:not(.active)').slideToggle(400);
    // $(this).closest('li').siblings('li').slideToggle(400);
  });
});
$(document).ready(function() {
	$('.reveal').click(function (){
	  $(this).fadeOut(function(){
	    $('.user-key').fadeIn();
	  });
	});
});
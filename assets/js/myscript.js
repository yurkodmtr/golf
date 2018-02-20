"use strict";

var customScript = function(){

	/* remove placeholder */
	var removePlaceholder = function () {
	    $('input,textarea').focus(function () {
	        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
	    }).blur(function () {
	        $(this).attr('placeholder', $(this).data('placeholder'));
	    });
	}

	$(document).ready(function(){
		removePlaceholder();
	  	$(".owl-header_gal").owlCarousel({
	  		'items':1
	  	});
	});
}

customScript();
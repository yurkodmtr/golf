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

	/* autoHeight */
	var autoHeight = function(elem){
		if ( elem.length < 1 ) {
			return false;
		}
		elem.css('height','auto');
		var maxHeight = 0;
		elem.each(function(){
			var elemHeight = $(this).height();
			if ( elemHeight >= maxHeight) {
				maxHeight = elemHeight;
			}
		});
		elem.css('height', maxHeight+'px');
	}

	/* userToggle */
	var userToggle = function(){
		$('._user__toggle').click(function(){
			if ( $('._user').hasClass('act') ) {
				$('._user').removeClass('act');
				$('._user__content').hide();
			} else {
				$('._user').addClass('act');
				$('._user__content').fadeIn('fast');
			}
		});
	}

	/* headerDrop */
	var	headerDrop = function(){
		$('.header__drop__title').click(function(){
			if ( $(this).parent().hasClass('act') ) {
				$(this).parent().removeClass('act');
				$(this).next().hide();
			} else {
				$(this).parent().addClass('act');
				$(this).next().fadeIn('fast');
			}
		});
	}

	/* mobileMenuToggle */
	var mobileMenuToggle = function(){
		$('.mobile_menu_toggle').click(function(){
			if ($(this).hasClass('act')) {
				$(this).removeClass('act');
				$('.header__bottom').slideUp();
			} else {
				$(this).addClass('act');
				$('.header__bottom').slideDown();
			}
		});
	}

	/* removeMobileMenu */
	var removeMobileMenu = function(){
		$('.mobile_menu_toggle').removeClass('act');
		$('.header__bottom').slideUp();
	}

	$(document).ready(function(){	
		mobileMenuToggle();
		userToggle();	
		headerDrop();
		removePlaceholder();		

		/* carousel init */
	  	$(".owl-header_gal").owlCarousel({
	  		'items':1,
	  		'pagintaion':true,
	  		'autoplay':true 
	  	});
	  	$(".owl-instructors_block").owlCarousel({
	  		'items':2,
	  		'nav': true
	  	});
	  	$(".owl-technologies_block").owlCarousel({
	  		'items':1,
	  		'nav':true
	  	});
	});

	$(window).load(function(){
		autoHeight($('.lessons_block .item .title'));
		autoHeight($('.lessons_block .item .descr'));
	});

	$(window).resize(function(){
		autoHeight($('.lessons_block .item .title'));
		autoHeight($('.lessons_block .item .descr'));
		removeMobileMenu();
	});
}

customScript();
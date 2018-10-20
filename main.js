	$('.navbar-sub-menu').hide();
	$('.navbar-sub-menu-services').hide();
	$('.sub-menu-contact').hide();

$(function(){
	
	//functions
	
	function showDropdown(clicked, clickedDiv, other1, other2, other1Div, other2Div){
		clicked.toggleClass('focus-color');
		clickedDiv.fadeToggle();
		other1Div.hide();
		other2Div.hide();
		other1.removeClass('focus-color');
		other2.removeClass('focus-color');
	}

	function arrowRoll(clicked, other1, other2){
		clicked.children('i').toggleClass('roll');
		other1.children('i').removeClass('roll');
		other2.children('i').removeClass('roll');
	}

	function hasRolled(clicked, other1, other2){
		clicked.children('i').hasClass('roll') ?
		clicked.children('i').addClass('roll-back') :
		clicked.children('i').removeClass('roll-back');

		other1.children('i').hasClass('roll') ?
		other1.children('i').addClass('roll-back') :
		other1.children('i').removeClass('roll-back');

		other2.children('i').hasClass('roll') ?
		other2.children('i').addClass('roll-back') :
		other2.children('i').removeClass('roll-back');
	}

	function mobileDropdowns(clickedDiv, menuIco, menu){
		clickedDiv.fadeToggle();
		menu.removeClass('open');
		menuIco.text('«');
	}

	// actions
	
	$('.first-dropdown').on('click', function(){
		let clicked = $(this);
		let clickedDiv = $('.navbar-sub-menu-services');
		let other1Div = $('.navbar-sub-menu');
		let other2Div = $('.sub-menu-contact');
		let other1 = $('.third-dropdown');
		let other2 = $('.second-dropdown');

		showDropdown(clicked, clickedDiv, other1, other2, other1Div, other2Div);
		hasRolled(clicked, other1, other2);
		arrowRoll(clicked, other1, other2);
	});
	
	$('.second-dropdown').on('click', function(){
		let clicked = $(this);
		let clickedDiv = $('.sub-menu-contact');
		let other1Div = $('.navbar-sub-menu');
		let other2Div = $('.navbar-sub-menu-services');
		let other1 = $('.third-dropdown');
		let other2 = $('.first-dropdown');

		showDropdown(clicked, clickedDiv, other1, other2, other1Div, other2Div);
		hasRolled($(this), $('.first-dropdown'), $('.third-dropdown'));
		arrowRoll($(this), $('.first-dropdown'), $('.third-dropdown'));

	});

	$('.third-dropdown').on('click', function(){
		let clicked = $(this);
		let clickedDiv = $('.navbar-sub-menu');
		let other1Div = $('.navbar-sub-menu-services');
		let other2Div = $('.sub-menu-contact');
		let other1 = $('.second-dropdown');
		let other2 = $('.first-dropdown');

		showDropdown(clicked, clickedDiv, other1, other2, other1Div, other2Div);
		hasRolled($(this), $('.first-dropdown'), $('.second-dropdown'));
		arrowRoll($(this), $('.first-dropdown'), $('.second-dropdown'));

	});
	
	//mobile dropdowns

	$('.first-dropdown-mobile').on('click', function(){
		let clickedDiv = $('.navbar-sub-menu-services');
		let menu = $('#myNav');
		let menuIco = $('.hamburger');

		mobileDropdowns(clickedDiv, menuIco, menu);
	});

	$('.second-dropdown-mobile').on('click', function(){
		let clickedDiv = $('.sub-menu-contact');
		let menu = $('#myNav');
		let menuIco = $('.hamburger');
		
		mobileDropdowns(clickedDiv, menuIco, menu);
	});

	$('.third-dropdown-mobile').on('click', function(){
		let clickedDiv = $('.navbar-sub-menu');
		let menu = $('#myNav');
		let menuIco = $('.hamburger');
		
		mobileDropdowns(clickedDiv, menuIco, menu);
	});
	

	// navbar shrink on scroll

	$(document).on('scroll', function(){
	 	let navHeight = $('nav').outerHeight();
	 	
	 	if ($(window).scrollTop() > 0) {
	 		$('body').addClass('fixed-nav');
	 		$('body').css({
  				paddingTop: `${navHeight}px`
  			});
	 	} else {
	 		$('body').removeClass('fixed-nav');
  			$('body').css({
  				paddingTop: 0
  			}); 
	 	}
  	});
	
	//form fields actions

  	$('.form-group-personal input').focus(function(){
	  $(this).parent().addClass('focused');
	});

	$('.form-group-personal input').blur(function(){
		if ( $(this).val() == "" ) {
		    $(this).parent().removeClass('focused');
		    $(this).removeClass('filled');  
		} else {
		    $(this).addClass('filled');
		}
	});
	
	$('.form-group-personal textarea').blur(function(){
		if ( $(this).val() == "" ) {
			$(this).parent().removeClass('focused');
		    $(this).removeClass('filled-textarea');
		}else {
		    $(this).addClass('filled-textarea');
		  }
	});


	//hamburger menu 

	$('.hamburger').on('click', function() {
		$('#myNav').toggleClass('open');
		$('.navbar-sub-menu').hide();
		$('.navbar-sub-menu-services').hide();
		$('.sub-menu-contact').hide();
		
		if ($(this).text() == "☰") {
			$('#myNav').addClass('open');
			$(this).text('✕');
		} else if ($(this).text() == "«") {
			$(this).text("✕");
			$('.navbar-sub-menu').hide();
			$('.navbar-sub-menu-services').hide();
			$('.sub-menu-contact').hide();
			$('#myNav').addClass('open');
		} else if ($(this).text() == "✕") {
			$(this).text('☰');
			$('#myNav').removeClass('open')
		}
	});
	
	// hide dropdowns on other link/button clicks

	$('.link1, .link2, .link3, #btn, .relative a').on('click', function(){
		$('.navbar-sub-menu').hide();
		$('.navbar-sub-menu-services').hide();
		$('.sub-menu-contact').hide();
		$('.third-dropdown').removeClass('focus-color');	
		$('.second-dropdown').removeClass('focus-color');
		$('.first-dropdown').removeClass('focus-color');
		$('.first-dropdown').children('i').addClass('roll-back');
		$('.second-dropdown').children('i').addClass('roll-back');
		$('.third-dropdown').children('i').addClass('roll-back');
	});
});
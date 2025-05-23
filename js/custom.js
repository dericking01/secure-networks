(function ($) {
 "use strict";
$(document).ready(function(){


	/*
	Jquery Mobile Menu
	============================*/
		$('#main-menu').meanmenu({
			meanMenuContainer: '.te-mobile-nav-menu',
			meanScreenWidth: "991",
		})
		/*
		Testimonial Crousel
		============================*/ 	
		  $(".all-testimonial2").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			dots:true, 
			items :1,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},				
				1000:{
					items:1
				}
			}			
		  });			  		
		
		/*
		Slider Crousel
		============================*/ 
		$(".all-slide").owlCarousel({
            items: 1,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
        });
        
        $(".all-slide").on("translate.owl.carousel", function(){
            $(".slider-text h1").removeClass("animated fadeInLeft").css("opacity", "0");
            $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul li a").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".all-slide").on("translated.owl.carousel", function(){
            $(".slider-text h1").addClass("animated fadeInLeft").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul li a").addClass("animated fadeInUp").css("opacity", "1");
        });
		/*
		Patner Crousel
		============================*/ 	
		  $(".all-patner").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false, 
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				768:{
					items:2
				},				
				992:{
					items:4
				},				
				1000:{
					items:4
				}
			}
		  }); 	
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });

	/*
    Stikey Js
    ============================*/
	(function () {
		var nav = $('.mnmenu-sec');
		var scrolled = false;
		$(window).on("scroll", function () {
			if (120 < $(window).scrollTop() && !scrolled) {
				nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
				scrolled = true;
			}
			if (120 > $(window).scrollTop() && scrolled) {
				nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
				scrolled = false;
			}
		});
	}());

		/*
		scrollUp
		============================*/	
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	

		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});
		
	});	
})(jQuery);


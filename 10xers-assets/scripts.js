var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function( $ ) {
    "use strict";

    /* rtl check */
    function rtl_isotop(){
    if ($('body').hasClass("rtl")) {
        return false;
    } else {
        return true;
    }};

    function rtl_slick(){
    if ($('body').hasClass("rtl")) {
        return true;
    } else {
        return false;
    }};

    /* --------------------------------------------------
    * preloader
    * --------------------------------------------------*/
    if ( $('#royal_preloader').length ) {
        var $selector       = $('#royal_preloader'),
            $width          = $selector.data('width'),
            $height         = $selector.data('height'),
            $color          = $selector.data('color'),
            $bgcolor        = $selector.data('bgcolor'),
            $logourl        = $selector.data('url');
        
        Royal_Preloader.config({
            mode           : 'logo',
            logo           : $logourl,
            logo_size      : [$width, $height],
            showProgress   : true,
            showPercentage : true,
            text_colour: $color,
            background:  $bgcolor,
        });        
    } 

    /* ========================================== 
	Sticky Header Default
	========================================== */
    $('.sticky-header').append('<div class="header-clone"></div>');
    $('.header-clone').height($('.site-header .octf-main-header').outerHeight());
    $('.sticky-header .header-clone').hide();   
	$(window).on("scroll", function(){
		if ( $( '#site-header' ).hasClass( "sticky-header" ) ) {
			var site_header = $('#site-header').outerHeight() + 30;	
			
		    if ($(window).scrollTop() >= site_header) {	    	
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').addClass('is-stuck');	
                $('.sticky-header .header-clone').show();        
		    }else {
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').removeClass('is-stuck');		              
                $('.sticky-header .header-clone').hide();        
		    }
		}
	});

    /* ========================================== 
    search on header
    ========================================== */
    $('.octf-mainbar .toggle_search').on("click", function(){
        $(this).toggleClass( "active" );
        $('.h-search-form-field').toggleClass('show');
        if ($(this).find('i').hasClass( "flaticon-search" )) {
            $('.toggle_search > i').removeClass( "flaticon-search" ).addClass("flaticon-close");
        }else{
            $('.toggle_search > i').removeClass( "flaticon-close" ).addClass("flaticon-search");
        }
        $('.h-search-form-inner > form > input.search-field').focus();
    });

    /* --------------------------------------------------
    * switcher
    * --------------------------------------------------*/
    var swt = $('.ot-switcher').find('.switch input');
    $('section.yearly').hide();
    swt.on( 'change', function() {
        var parent = $(this).parents('.elementor-top-section');
        if(this.checked) {
            parent.find('.r-switch').addClass('active');
            parent.find('.l-switch').removeClass('active');
            parent.find('section.monthly').hide();
            parent.find('section.yearly').show();
        }else{
            parent.find('.l-switch').addClass('active');
            parent.find('.r-switch').removeClass('active');
            parent.find('section.yearly').hide();
            parent.find('section.monthly').show();
        }
    });

    /* --------------------------------------------------
    * big tabs
    * --------------------------------------------------*/
    $('.tab-titles .title-item, .tab-titles-2 .title-item-2').on( 'click', function(){
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.content-tab').hide();
        $($(this).data('link')).show();

        return false;
    });
    $('.tab-titles .title-item:first, .tab-titles-2 .title-item-2:first').trigger('click');

	/*Gallery Post*/
    $('.gallery-post').each( function () {
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 7000,
            rtl: rtl_slick(),
            prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
            responsive: []
        });
    });

    /*Popup Video*/
    var $video_play = $('.btn-play');
    if ($video_play.length > 0 ) {
        $video_play.magnificPopup({
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: true,
            callbacks: {
            beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
        });
    }

    /*Portfolio Filter*/
    $(window).on("load", function () {
        if( $('#projects_grid').length > 0 ){
            var $container = $('#projects_grid'); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                layoutMode : 'masonry',
                isOriginLeft: rtl_isotop()
            });

            var $optionSets = $('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function(){
                var $this = $(this);

                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSets.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
        };    

        if( $('.blog-grid').length > 0 ){
            var $container = $('.blog-grid'); 
            $container.isotope({ 
                itemSelector : '.masonry-post-item', 
                layoutMode : 'masonry'
            });
        };
    });

    /*Gird Lines*/
    $('.has-lines').each(function () {
        var l  = $('<div class="grid-lines"><span class="g-line line-left"><span class="g-dot"></span></span><span class="g-line line-cleft"><span class="g-dot"></span></span><span class="g-line line-center"><span class="g-dot"></span></span><span class="g-line line-cright"><span class="g-dot"></span></span><span class="g-line line-right"><span class="g-dot"></span></span></div>');
        $(this).prepend(l);
    });

    /* ========================================== 
    Back To Top
    ========================================== */
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); 
    }

})( jQuery );



}
/*
     FILE ARCHIVED ON 09:09:09 Nov 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:38:55 Dec 27, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 18.161
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 25.767
  LoadShardBlock: 192.055 (3)
  PetaboxLoader3.datanode: 188.433 (4)
  load_resource: 67.296
  PetaboxLoader3.resolve: 28.832
*/
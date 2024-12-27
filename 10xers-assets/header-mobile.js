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

(function($) {
  "use strict";
    /* ========================================== 
	Header Mobile
	========================================== */
	// mobile_mainmenu create span
	$('.collapse .mobile_mainmenu li:has(ul)').prepend('<span class="arrow"><i class="flaticon-right-arrow"></i></span>');

	$( "#mmenu_toggle" ).on('click', function() {
		$(this).toggleClass( "active" );

		if ($(this).hasClass( "active" )) {
			$('.mobile_nav').stop(true, true).slideDown();
		}else{
			$('.mobile_nav').stop(true, true).slideUp();
		}		
	});

	$(".mobile_mainmenu > li span.arrow").click(function() {
        $(this).parent().find("> ul").stop(true, true).slideToggle()
        $(this).toggleClass( "active" ); 
    });

})(jQuery);

}
/*
     FILE ARCHIVED ON 22:14:57 Nov 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:38:55 Dec 27, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.495
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 15.339
  LoadShardBlock: 94.595 (3)
  PetaboxLoader3.datanode: 107.962 (4)
  load_resource: 27.301
*/
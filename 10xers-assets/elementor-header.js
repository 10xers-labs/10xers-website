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

    /* --------------------------------------------------
    * sticky header
    * --------------------------------------------------*/
    $('.header-static .is-fixed').parent().append('<div class="header-clone"></div>');
    $('.header-clone').height($('#site-header .is-fixed').outerHeight());
    $('.header-static .header-clone').hide(); 
    $(window).on("scroll", function(){
      var site_header = $('#site-header').outerHeight() + 1;  
        
      if ($(window).scrollTop() >= site_header) {       
        $('.site-header .is-fixed').addClass('is-stuck'); 
        $('.header-static .header-clone').show(); 
      }else {
        $('.site-header .is-fixed').removeClass('is-stuck');                  
        $('.header-static .header-clone').hide();
      }
    });
  
    /* --------------------------------------------------
    * side panel
    * --------------------------------------------------*/
      var element = $('#panel-btn'),
      sidebar = $('#side-panel');
  
      function panel_handler() {
          var isActive = !element.hasClass('active');
  
          element.toggleClass('active', isActive);
          sidebar.toggleClass('side-panel-open', isActive);
          $('body').toggleClass('side-panel-active', isActive);
          return false;
      }
  
      $('#panel-btn, .side-panel-close, .panel-overlay').on('click', panel_handler);
  
    /* --------------------------------------------------
    * toggle search
    * --------------------------------------------------*/
    var tgSearch  = function($scope, $){
      $scope.find('.octf-search').each( function(){
        var selector = $(this);
        selector.find('.toggle-search').on("click", function(){
          $(this).toggleClass( "active" );
          selector.find('.h-search-form-field').toggleClass('show');
          if ($(this).find('i').hasClass( "flaticon-search" )) {
            $('.toggle-search > i').removeClass( "flaticon-search" ).addClass("flaticon-close");
          }else{
            $('.toggle-search > i').removeClass( "flaticon-close" ).addClass("flaticon-search");
          }
        });
      });
    };
  
    /* --------------------------------------------------
    * mobile menu
    * --------------------------------------------------*/
    var mmenuPanel  = function(){
          var element = $('#mmenu-toggle'),
              mmenu   = $('#mmenu-wrapper');
  
          function mmenu_handler() {
              var isActive = !element.hasClass('active');
  
              element.toggleClass('active', isActive);
              mmenu.toggleClass('mmenu-open', isActive);
              $('body').toggleClass('mmenu-active', isActive);
              return false;
          }
  
          $('#mmenu-toggle, .mmenu-close, .mmenu-overlay').on('click', mmenu_handler);
  
          $('.mmenu-wrapper li:has(ul)').prepend('<span class="arrow"><i class="flaticon-right-arrow"></i></span>');
          $(".mmenu-wrapper .mobile_mainmenu > li span.arrow").on('click',function() {
              $(this).parent().find("> ul").stop(true, true).slideToggle()
              $(this).toggleClass( "active" ); 
          });
      };
  
      /**
       * Elementor JS Hooks
       */
      $(window).on("elementor/frontend/init", function () {
  
          /*toggle search*/
          elementorFrontend.hooks.addAction(
              "frontend/element_ready/isearch.default",
              tgSearch
          );
  
          /*mmenu*/
          elementorFrontend.hooks.addAction(
              "frontend/element_ready/imenu_mobile.default",
              mmenuPanel
          );
  
    });
  
  })(jQuery);

}
/*
     FILE ARCHIVED ON 22:14:51 Nov 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:38:56 Dec 27, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.5
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.011
  cdx.remote: 8.141
  LoadShardBlock: 328.134 (3)
  PetaboxLoader3.datanode: 181.364 (4)
  PetaboxLoader3.resolve: 263.137 (3)
  load_resource: 121.171
*/
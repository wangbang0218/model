;(function($) {
  'use strict';

  // Navbar collapse
  $(document).on('click', '.navbar-collapse.in', function(el) {
    if($(el.target).is('a')) {
      $(this).collapse('hide');
    }
  });

  // Sticky footer
  // http://blog.mojotech.com/responsive-dynamic-height-sticky-footers/
  var bumpIt = function() {
      $('body').css('margin-bottom', $('footer').height());
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

})(window.$);

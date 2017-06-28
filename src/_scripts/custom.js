(function() {
'use strict';
//play video on click
jQuery(function() {
    jQuery('a[data-play-video]').on('click', function(e) {
        e.preventDefault();
        jQuery('#video').show();
        jQuery('#video-mobile').show();
      });
  });
})();

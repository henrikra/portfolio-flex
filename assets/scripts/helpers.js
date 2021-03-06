(function($) {
	var helpers = {
		// Adds delay to a function call
		debounce: function debounce(fn, delay) {
	    var timer = null;
	    return function() {
	      var context = this;
	      var args = arguments;
	      clearTimeout(timer);
	      timer = setTimeout(function() {
	        fn.apply(context, args);
	      }, delay);
	    };
	  },
	  // Check if element is in viewport
    isElementInViewport: function(element) {
      // multiplier determines how early element is considered visible. Bigger value = earlier visible
      var multiplier = 0.9;
      return element.offset().top <= $(window).scrollTop() + $(window).height() * multiplier;
    },
    // check if all events are visible
    isAllEventsVisible: function(events) {
      var eventsVisible = 0;
      events.each(function() {
        if ($(this).find('.timeline--event-content').hasClass('is-visible')) {
          eventsVisible++;
        }
      });
      return eventsVisible === events.length;
    },
    // check if user is on mobile phone
    isMobile: function() {
      var mobileBreakpoint = 750;
      return $(window).width() <= mobileBreakpoint;
    },
    // transform navbar on certain breakpoint
    resizeNavbar: function() {
      if (this.isMobile()) {
        $('.navbar').removeClass('is-small');
        return;
      }
      var distanceFromTop = $(window).scrollTop();
      var shrinkOn = 100;
      var navbar = $('.navbar');
      if (distanceFromTop >= shrinkOn) {
        navbar.addClass('is-small');
      } else {
        navbar.removeClass('is-small');
      }
    },
    // scroll to element
    scrollTo: function(targetElement) {
      var offset = $('.navbar-header').height() > 70 ? 70 : $('.navbar-header').height();
      $('#navbar-collapse').collapse('hide');

      $('html, body').animate({
        scrollTop: targetElement === '#' ? 0 : $(targetElement).offset().top - offset
      }, 1000);
    }
	};

	window.helpers = helpers;
})(jQuery);

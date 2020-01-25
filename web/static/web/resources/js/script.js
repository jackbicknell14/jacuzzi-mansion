$(document).ready(function() {
        /* For the sticky navigation */  
    $('.js--section-tour').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky animated fadeIn');
            } else {
                $('nav').removeClass('sticky animated fadeIn');
            }
        }, {
            offset: '60px'
        });

        /** Scroll on buttons */
        $('.js--scroll-to-music').click(function() {
            $('html, body').animate({scrollTop: $('.js--section-music').offset().top}, 1000); 
        });

        // Navigation scroll
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
        $(function() {
        $('.waypoint').waypoint(function(direction) {
            if (direction === 'down') {
                $(this).addClass("waypoint-here");
                $(this).prev().removeClass("waypoint-here");
            }
        }, {
            offset: '50%'
        }).waypoint(function(direction) {
            if (direction === 'up') {
                $(this).addClass("waypoint-here");
                $(this).next().removeClass("waypoint-here");
            }
        }, {
            offset: '0'
        });	
    });
    
    /* Animation on scroll */                                  
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');    
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
});

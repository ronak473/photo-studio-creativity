/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                            *
 *****************************************************
 */
$(window).on('load', function () {
  'use strict';

  var preLoader = $('.preloader');
  var fancybox = $('.fancybox');
  var faq = $('#faq');
  var comingSoonTimer = $('#coming-soon-timer');
  var fancyboxIframe = $('.fancybox-iframe');
  var mixItUp = $('#mixItUp');
  var scrollTop = $('#scroll-top');

  // ============================================
  // PreLoader On window Load
  // =============================================
  if (preLoader.length) {
    preLoader.addClass('loaderout');
  }

  //========================================
  // LightBox / Fancybox
  //========================================

  if (fancybox.length) {
    fancybox.fancybox();
  }

  //========================================
  // Accordion functions Calling
  //========================================

  if (faq.length) {
    faq.accordion();
  }

  //========================================
  // Contact Map functions Calling
  //========================================
  initMap();
  //========================================
  // Owl Carousel functions Calling
  //========================================

  owlCarouselInit();
  //========================================
  // Comming Soon Timer
  //========================================
  if (comingSoonTimer.length) {
    comingsoonInt();
  }
  //========================================
  // Search Bar Open
  //========================================

  var searchOpen = $('#search-open');
  var headSearchClick = $('.search-click');
  var headSearchClickDismis = $('.search-close');
  headSearchClick.on('click', function (e) {
    e.preventDefault();
    searchOpen.addClass('searchopen');
  });
  headSearchClickDismis.on('click', function (e) {
    e.preventDefault();
    searchOpen.removeClass('searchopen');
  });
  //========================================
  // Scroll top
  //========================================

  var boDy = $('body');
  if (scrollTop.length) {
    console.log('hello');
    scrollTop.on('click', function () {
      boDy.animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });

    $(window).on('scroll', function () {
      console.log('hello2');
      if ($(this).scrollTop() > 500) {
        console.log('hello3');
        scrollTop.addClass('showScrollTop');
      } else {
        console.log('hello4');
        scrollTop.removeClass('showScrollTop');
      }
    });
  }

  //============================================
  // Sticky Header settings
  //============================================
  var headerSticky = $('#header');
  if (headerSticky.length) {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 10) {
        headerSticky.addClass('sticky-header');
      } else {
        headerSticky.removeClass('sticky-header');
      }
    });
  }

  //============================================
  // MixItUp settings
  //============================================

  if (mixItUp.length) {
    mixItUp.mixItUp();
  }
});

//========================================
// Owl Carousel functions
//========================================

function owlCarouselInit() {
  'use strict';

  //========================================
  // owl carousels settings
  //========================================
  var mainSlider = $('#main-slider');
  var portfolioSlider = $('#portfolio-slider');
  var photographySlider = $('#photography-slider');
  var partnerSlider = $('#partner-slider');
  var sidebarSlider = $('#sidebar-slider');
  var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
  var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';

  if (mainSlider.length) {
    mainSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      navText: [prevNav, nextNav],
      dots: true,
      autoplay: true,
      autoplayTimeout: 12000,
      smartSpeed: 10000,
      mouseDrag: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  if (portfolioSlider.length) {
    portfolioSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: [prevNav, nextNav],
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
  if (photographySlider.length) {
    photographySlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      navText: [prevNav, nextNav],
      dots: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
  if (partnerSlider.length) {
    partnerSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: [prevNav, nextNav],
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
  if (sidebarSlider.length) {
    sidebarSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: [prevNav, nextNav],
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
}

//***************************************
// Contact Page Map
//****************************************

function initMap() {
  'use strict';

  var mapDiv = $('#gmap_canvas');

  if (mapDiv.length) {
    var myOptions = {
      zoom: 5,
      scrollwheel: false,
      draggable: true,
      //backgroundColor:grey,
      center: new google.maps.LatLng(22.9623, 76.0508),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(
      document.getElementById('gmap_canvas'),
      myOptions
    );
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(22.9623, 76.0508),
    });
    var infowindow = new google.maps.InfoWindow({
      content: '<strong>ITGEEkS</strong>',
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });

    infowindow.open(map, marker);
  }
}

function comingsoonInt() {
  'use strict';

  // Set the date we're counting down to
  var countDownDate = new Date('Dec 24, 2017 15:37:25').getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var weeks = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 7)
    );
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('weeks').innerHTML = weeks;

    document.getElementById('days').innerHTML = days;

    document.getElementById('hours').innerHTML = hours;

    document.getElementById('seconds').innerHTML = seconds;

    document.getElementById('minutes').innerHTML = minutes;
  }, 1000);
}

/*
 *****************************************************
 *	END OF THE JS 									*
 *	DOCUMENT                       					*
 *****************************************************
 */

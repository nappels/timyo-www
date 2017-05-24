//
// Main JavaScript file
// --------------------------------------------------------


var Timyo = {
  init: function() {
    window.addEventListener('scroll', Timyo.events.toggleScrolledClass);
    Timyo.events.toggleScrolledClass();
    Timyo.bindEvents();
    Timyo.sliders.init();
  },
  bindEvents: function() {
    var clickEventEls = document.querySelectorAll('[data-event-click]');
    for (var i = 0; i < clickEventEls.length; i++) {
      clickEventEls[i].addEventListener('click', Timyo.events[clickEventEls[i].dataset.eventClick]);
    }
  },
  sliders: {
    init: function() {
      Swipe(Timyo.sliders.testimonials.el, Timyo.sliders.testimonials.options);
      Swipe(Timyo.sliders.screenshots.el, Timyo.sliders.screenshots.options);
    },
    screenshots: {
      el: document.getElementById('screenshot-slider'),
      options: {
        callback: function(index) {
          Timyo.events.setActiveCard(index);
          Timyo.events.setActiveHomepageScreen(index);
        }
      }
    },
    testimonials: {
      el: document.getElementById('testimonial-slider'),
      options: {
        auto: 6000,
        callback: function(index) {
          Timyo.events.setTestimonialActiveIndex(index);
        }
      }
    }
  },
  events: {
    toggleNavbar: function() {
      document.body.classList.toggle('mobile-nav-open');
    },
    handleHomepageTabClick: function(e) {
      var index = e.currentTarget.dataset.index;
      Timyo.events.setActiveCard(index);
      Timyo.events.setActiveHomepageScreen(index);
    },
    setActiveCard: function(index) {
      var cards = document.querySelectorAll('#screenshot-slider .icon-card');

      for (var i = 0; i < cards.length; i++ ) {
        cards[i].classList.remove('active');
        if (cards[i].dataset.index == index) {
          cards[i].classList.add('active');
        }
      }
    },
    setActiveHomepageScreen: function(index) {
      var screens = document.querySelectorAll('.screen-wrapper .screen');

      for (var i = 0; i < screens.length; i++ ) {
        screens[i].classList.remove('active');
        if (screens[i].dataset.index == index) {
          screens[i].classList.add('active');
        }
      }
    },
    toggleScrolledClass: function() {
      document.body.classList.toggle('scrolled', window.pageYOffset >= 16);
    },
    setTestimonialActiveIndex: function(index) {
      var dots = document.querySelectorAll('.testimonials-section .dot-wrapper .dot');

      var activeIndex = index;

      if (index > dots.length - 1) activeIndex = index - dots.length;

      for (var i = 0; i < dots.length; i++ ) {
        var currentDot = dots[i];
        currentDot.classList.remove('active');
        if (currentDot.dataset.index == activeIndex) {
          currentDot.classList.add('active');
        }
      }
    }
  }
};

Timyo.init();

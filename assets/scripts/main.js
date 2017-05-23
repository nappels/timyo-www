//
// Main JavaScript file
// --------------------------------------------------------


var Timyo = {
  init: function() {
    window.addEventListener('scroll', Timyo.events.toggleScrolledClass);
    Timyo.events.toggleScrolledClass();
    Timyo.bindEvents();
  },
  bindEvents: function() {
    var clickEventEls = document.querySelectorAll('[data-event-click]');
    for (var i = 0; i < clickEventEls.length; i++) {
      clickEventEls[i].addEventListener('click', Timyo.events[clickEventEls[i].dataset.eventClick]);
    }
  },
  events: {
    toggleNavbar: function() {
      document.body.classList.toggle('mobile-nav-open');
    },
    handleHomepageTabClick: function(e) {
      Timyo.events.setActiveCard(e);
      Timyo.events.setActiveHomepageScreen(e);
    },
    setActiveCard: function(e) {
      var children = Array.prototype.slice.call(e.currentTarget.parentNode.childNodes);
      for (var i = 0; i < children.length; i++ ) {
        children[i].classList.remove('active');
      }
      e.currentTarget.classList.add('active');
    },
    setActiveHomepageScreen: function(e) {
      var screenWrapper = document.querySelector('.screen-wrapper');
      var id = e.currentTarget.dataset.tabId;
      var children = Array.prototype.slice.call(screenWrapper.childNodes);
      for (var i = 0; i < children.length; i++ ) {
        children[i].classList.remove('active');
      }
      screenWrapper.querySelector('[data-id="' + id + '"]').classList.add('active');
    },
    toggleScrolledClass: function() {
      document.body.classList.toggle('scrolled', window.pageYOffset >= 16);
    },
  }
};

Timyo.init();

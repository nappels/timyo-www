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
      for (var card of e.currentTarget.parentNode.childNodes) {
        card.classList.remove('active');
      }
      e.currentTarget.classList.add('active');
    },
    setActiveHomepageScreen: function(e) {
      var screenWrapper = document.querySelector('.screen-wrapper');
      var id = e.currentTarget.dataset.tabId;
      for (var screenEl of screenWrapper.childNodes) {
        screenEl.classList.remove('active');
      }
      screenWrapper.querySelector('[data-id="' + id + '"]').classList.add('active');
    },
    toggleScrolledClass: function() {
      document.body.classList.toggle('scrolled', window.pageYOffset >= 16);
    },
  }
};

Timyo.init();

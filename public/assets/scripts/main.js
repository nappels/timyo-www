//
// Main JavaScript file
// --------------------------------------------------------


// Event handlers
var handlers = {
  toggleNavbar: function() {
    document.body.classList.toggle('mobile-nav-open');
  }
};

// Header scrolling
(function header(w) {
  var toggleScrolledClass = function() {
    document.body.classList.toggle('scrolled', w.pageYOffset >= 16);
  };
  w.addEventListener('scroll', toggleScrolledClass);
  toggleScrolledClass();
})(window);

// Event binding
(function events(w) {
  var clickEventEls = document.querySelectorAll('[data-event-click]');
  for (var i = 0; i < clickEventEls.length; i++) {
    clickEventEls[i].addEventListener('click', w.handlers[clickEventEls[i].dataset.eventClick]);
  }
})(window);

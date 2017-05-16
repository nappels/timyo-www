//
// Main JavaScript file
// --------------------------------------------------------

// Header scrolling
(function header(w) {
  w.addEventListener('scroll', function() {
    document.body.classList.toggle('scrolled', w.pageYOffset >= 16);
  });
})(window);

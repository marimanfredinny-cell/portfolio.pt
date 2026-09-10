document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  var revealEls = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
    observer.observe(el);
  });
});

(function () {
  'use strict';

  // Footer year
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Nav scroll state
  var nav = document.getElementById('nav');
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Mobile menu
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-link').forEach(function (l) {
    l.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal with stagger
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal, .reveal-left'));
      var idx = siblings.indexOf(entry.target);
      setTimeout(function () { entry.target.classList.add('visible'); }, Math.min(idx * 100, 400));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left').forEach(function (el) { observer.observe(el); });

  // Contact form
  var form = document.getElementById('contactForm');
  if (form) {
    form.querySelectorAll('input, select, textarea').forEach(function (f) {
      f.addEventListener('input', function () { f.classList.remove('error'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var valid = true;
      if (!name.value.trim()) { name.classList.add('error'); valid = false; }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('error'); valid = false; }
      if (!valid) return;

      var engagement = document.getElementById('engagement');
      var message = document.getElementById('message');
      var org = document.getElementById('org');

      var subject = encodeURIComponent('Engagement Inquiry — Stoller Consulting Services LLC');
      var body = encodeURIComponent(
        'Name: ' + name.value.trim() + '\n' +
        'Organization: ' + (org ? org.value.trim() : '') + '\n' +
        'Email: ' + email.value.trim() + '\n' +
        'Engagement Type: ' + (engagement ? engagement.value : '') + '\n\n' +
        'Situation Overview:\n' + (message ? message.value.trim() : '')
      );

      window.location.href = 'mailto:rwstoller@gmail.com?subject=' + subject + '&body=' + body;

      setTimeout(function () {
        form.innerHTML =
          '<div style="padding:2.5rem;border:1px solid rgba(192,21,42,0.4);border-top:3px solid #C0152A;text-align:center;">' +
          '<p style="font-family:\'Barlow Condensed\',sans-serif;font-size:1.6rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#fff;margin-bottom:0.5rem;">Inquiry Submitted</p>' +
          '<p style="font-size:0.85rem;color:#8A9BAE;">Your email client should have opened with the message pre-filled. Expect a response within 48 hours.</p>' +
          '</div>';
      }, 500);
    });
  }
})();

(function () {
  'use strict';

  // Year
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();

  // Nav scroll
  var nav = document.getElementById('nav');
  function upNav() { nav.classList.toggle('on', window.scrollY > 60); }
  window.addEventListener('scroll', upNav, { passive: true });
  upNav();

  // Mobile menu
  var burger = document.getElementById('burger');
  var mob = document.getElementById('mobMenu');
  burger.addEventListener('click', function () { mob.classList.toggle('open'); });
  document.querySelectorAll('.mob-lnk').forEach(function (l) {
    l.addEventListener('click', function () { mob.classList.remove('open'); });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (t) {
        e.preventDefault();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var sib = Array.from(entry.target.parentElement.querySelectorAll('.rv, .rv-r'));
      var idx = sib.indexOf(entry.target);
      setTimeout(function () { entry.target.classList.add('on'); }, Math.min(idx * 100, 350));
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv, .rv-r').forEach(function (el) { obs.observe(el); });

  // Form
  var form = document.getElementById('cForm');
  if (form) {
    form.querySelectorAll('input, select, textarea').forEach(function (f) {
      f.addEventListener('input', function () { f.classList.remove('err'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nm = document.getElementById('nm');
      var em = document.getElementById('em');
      var valid = true;

      if (!nm.value.trim()) { nm.classList.add('err'); valid = false; }
      if (!em.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) {
        em.classList.add('err'); valid = false;
      }
      if (!valid) return;

      var org = document.getElementById('org');
      var eng = document.getElementById('eng');
      var msg = document.getElementById('msg');

      var subj = encodeURIComponent('Engagement Inquiry - Stoller Consulting Services LLC');
      var body = encodeURIComponent(
        'Name: ' + nm.value.trim() + '\n' +
        'Organization: ' + (org ? org.value.trim() : '') + '\n' +
        'Email: ' + em.value.trim() + '\n' +
        'Engagement: ' + (eng ? eng.value : '') + '\n\n' +
        'Situation:\n' + (msg ? msg.value.trim() : '')
      );

      window.location.href = 'mailto:rwstoller@gmail.com?subject=' + subj + '&body=' + body;

      setTimeout(function () {
        form.innerHTML =
          '<div style="padding:2rem 2.5rem;border:1px solid rgba(28,74,53,0.25);border-top:3px solid #C9A84C;background:#fff;text-align:center;">' +
          '<p style="font-family:Georgia,serif;font-size:1.3rem;font-weight:700;color:#1C4A35;margin-bottom:0.5rem;">Inquiry Submitted</p>' +
          '<p style="font-size:0.875rem;color:#3A4A3E;">Your email client should have opened with the details pre-filled. We respond within 48 hours.</p>' +
          '</div>';
      }, 500);
    });
  }
})();

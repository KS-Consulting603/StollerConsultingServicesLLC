/* ============================================================
   STOLLER CONSULTING SERVICES LLC
   Design: Lehman Brothers Institutional — Navy / Crimson / Off-White
   Fonts: Barlow Condensed (display) + Barlow (body) + Source Serif 4 (accent)
   ============================================================ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  /* Lehman palette */
  --black:       #06090F;
  --navy:        #0B1422;
  --navy-mid:    #111D2E;
  --navy-light:  #1A2A40;
  --crimson:     #C0152A;
  --crimson-dk:  #8C0D1E;
  --crimson-lt:  #E01A32;
  --offwhite:    #EDE8DF;
  --white:       #FFFFFF;
  --steel:       #8A9BAE;
  --steel-dark:  #4A5A6A;
  --rule:        rgba(192, 21, 42, 0.6);

  --font-display: 'Barlow Condensed', 'Trade Gothic', Arial Narrow, sans-serif;
  --font-body:    'Barlow', system-ui, sans-serif;
  --font-serif:   'Source Serif 4', Georgia, serif;

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --transition: 0.3s var(--ease-out);
  --container: 1200px;
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  background: var(--navy);
  color: var(--offwhite);
  line-height: 1.6;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { display: block; max-width: 100%; }

/* --- UTILITIES --- */
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 2.5rem;
}

.section-label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--crimson);
  margin-bottom: 0.75rem;
}

.section-label--light { color: rgba(192,21,42,0.7); }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 1rem;
}

.section-title em {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  text-transform: none;
  color: var(--offwhite);
  letter-spacing: 0;
}

.section-title--light { color: var(--offwhite); }

.section-sub {
  font-size: 0.95rem;
  color: var(--steel);
  line-height: 1.75;
  max-width: 520px;
}

/* --- SCROLL REVEAL --- */
.reveal, .reveal-left {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}
.reveal-left { transform: translateX(24px); }
.reveal.visible, .reveal-left.visible {
  opacity: 1;
  transform: none;
}

/* --- BUTTONS --- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.btn--primary {
  background: var(--crimson);
  color: var(--white);
}
.btn--primary:hover { background: var(--crimson-lt); transform: translateY(-2px); }

.btn--ghost {
  background: transparent;
  color: var(--offwhite);
  border: 1px solid rgba(237,232,223,0.25);
}
.btn--ghost:hover { border-color: var(--crimson); color: var(--crimson); }

.btn--submit {
  background: var(--crimson);
  color: var(--white);
  width: 100%;
  padding: 1rem;
  justify-content: center;
}
.btn--submit:hover { background: var(--crimson-lt); }

/* --- NAV --- */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.4s ease, border-color 0.4s ease;
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(6, 9, 15, 0.97);
  backdrop-filter: blur(10px);
  border-bottom-color: rgba(192, 21, 42, 0.3);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  max-width: var(--container);
  margin: 0 auto;
}

.nav__brand {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.nav__brand-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--white);
  transition: color 0.2s;
}

.nav__brand-sub {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--crimson);
}

.nav__brand:hover .nav__brand-name { color: var(--offwhite); }

.nav__links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav__links a {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel);
  transition: color 0.2s;
}
.nav__links a:hover { color: var(--white); }

.nav__cta {
  color: var(--white) !important;
  background: var(--crimson);
  padding: 0.5rem 1.25rem;
}
.nav__cta:hover { background: var(--crimson-lt) !important; }

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav__hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--offwhite);
  transition: var(--transition);
}

.nav__mobile {
  display: none;
  flex-direction: column;
  background: var(--black);
  padding: 1rem 2.5rem 1.5rem;
  border-top: 1px solid rgba(192,21,42,0.2);
}
.nav__mobile.open { display: flex; }
.mobile-link {
  padding: 0.75rem 0;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--steel);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* --- HERO --- */
.hero {
  min-height: 100vh;
  background: var(--black);
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 79px,
      rgba(192,21,42,0.04) 80px
    );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 2.5rem 5rem;
  position: relative;
}

.hero__ruled-top {
  position: absolute;
  top: 80px; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--crimson) 0%, var(--crimson) 40%, transparent 100%);
}

.hero__ruled-bottom {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: rgba(192,21,42,0.25);
}

.hero__content {
  max-width: var(--container);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: center;
}

.hero__overline {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--crimson);
  margin-bottom: 1.5rem;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 9vw, 7.5rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 2rem;
}

.hero__headline em {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  text-transform: none;
  color: var(--offwhite);
  display: block;
  font-size: 0.85em;
  line-height: 1.1;
  letter-spacing: 0;
}

.hero__body {
  font-size: 1rem;
  color: var(--steel);
  line-height: 1.75;
  max-width: 460px;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__stat-block {
  border: 1px solid rgba(192,21,42,0.3);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: rgba(192,21,42,0.04);
}

.hero__stat {
  padding: 1.5rem 0;
}

.hero__rule {
  height: 1px;
  background: rgba(192,21,42,0.25);
}

.stat-num {
  display: block;
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-plus {
  font-size: 1.5rem;
  color: var(--crimson);
}

.stat-label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--steel);
  margin-top: 0.4rem;
}

/* --- DISCIPLINE BAR --- */
.discipline-bar {
  background: var(--crimson);
  padding: 0.85rem 0;
  overflow: hidden;
}

.discipline-bar__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 2.5rem;
  flex-wrap: wrap;
}

.discipline-bar span {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  white-space: nowrap;
}

.bar-dot {
  width: 3px;
  height: 3px;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  flex-shrink: 0;
}

/* --- EXPERTISE --- */
.expertise {
  padding: 7rem 0;
  background: var(--navy);
}

.section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(192,21,42,0.25);
}

.section-header__left { flex-shrink: 0; }

.expertise__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid rgba(192,21,42,0.2);
}

.expertise-card {
  padding: 3rem 2.5rem;
  border-right: 1px solid rgba(192,21,42,0.2);
  transition: background 0.3s;
}
.expertise-card:last-child { border-right: none; }
.expertise-card:hover { background: rgba(192,21,42,0.04); }

.expertise-card__num {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 800;
  color: rgba(192,21,42,0.15);
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.expertise-card__rule {
  height: 2px;
  width: 40px;
  background: var(--crimson);
  margin-bottom: 1.5rem;
}

.expertise-card__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 1rem;
  line-height: 1.1;
}

.expertise-card__body {
  font-size: 0.875rem;
  color: var(--steel);
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.expertise-card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.expertise-card__list li {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--steel-dark);
  padding-left: 1rem;
  position: relative;
}

.expertise-card__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--crimson);
  font-size: 0.6rem;
}

/* --- ABOUT --- */
.about {
  padding: 7rem 0;
  background: var(--black);
  border-top: 1px solid rgba(192,21,42,0.2);
  border-bottom: 1px solid rgba(192,21,42,0.2);
}

.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.about__rule {
  height: 2px;
  width: 60px;
  background: var(--crimson);
  margin: 1.5rem 0 2rem;
}

.about__left p {
  font-size: 0.925rem;
  color: var(--steel);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.about__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}

.tag {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--steel);
  border: 1px solid rgba(138,155,174,0.25);
  padding: 0.3rem 0.75rem;
}

.about__callout {
  position: relative;
  padding: 2.5rem;
  border: 1px solid rgba(192,21,42,0.3);
  margin-bottom: 2rem;
  background: rgba(192,21,42,0.03);
}

.about__callout-rule {
  height: 3px;
  width: 100%;
  background: var(--crimson);
  position: absolute;
  top: 0; left: 0; right: 0;
}

blockquote {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-style: italic;
  font-weight: 300;
  color: var(--offwhite);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

cite {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--crimson);
  font-style: normal;
}

.about__credentials {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.about__cred {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.cred-label {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--crimson);
  flex-shrink: 0;
  width: 120px;
}

.cred-value {
  font-size: 0.82rem;
  color: var(--steel);
}

/* --- APPROACH --- */
.approach {
  padding: 6rem 0;
  background: var(--crimson-dk);
}

.approach__inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
  align-items: center;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 2.5rem;
}

.approach__right {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.approach__item {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.approach__item:first-child { border-top: 1px solid rgba(255,255,255,0.1); }

.approach__num {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.35);
  flex-shrink: 0;
  width: 30px;
  padding-top: 2px;
}

.approach__item h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 0.4rem;
}

.approach__item p {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.65;
}

/* --- CONTACT --- */
.contact {
  padding: 7rem 0;
  background: var(--navy-mid);
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: start;
}

.contact__sub {
  font-size: 0.9rem;
  color: var(--steel);
  margin: 1rem 0 2rem;
  line-height: 1.75;
}

.contact__availability {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--steel);
}

.avail-dot {
  width: 8px;
  height: 8px;
  background: #2ECC71;
  border-radius: 50%;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* FORM */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-dark);
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-bottom-color: rgba(192,21,42,0.4);
  padding: 0.85rem 1rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--offwhite);
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  -webkit-appearance: none;
}

.form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(138,155,174,0.6)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  cursor: pointer;
}

.form-group select option { background: var(--navy-mid); }
.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(255,255,255,0.18); }
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-bottom-color: var(--crimson); }
.form-group textarea { resize: vertical; min-height: 100px; }
.form-group input.error,
.form-group select.error,
.form-group textarea.error { border-bottom-color: #ff4444; }

.form-note {
  font-size: 0.7rem;
  color: var(--steel-dark);
  text-align: center;
  margin-top: 0.25rem;
  letter-spacing: 0.05em;
}

/* --- FOOTER --- */
.footer {
  background: var(--black);
  padding: 2.5rem 0;
}

.footer__rule {
  height: 2px;
  background: linear-gradient(90deg, var(--crimson) 0%, var(--crimson) 30%, transparent 100%);
  margin-bottom: 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 2rem;
}

.footer__name {
  display: block;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: var(--white);
  margin-bottom: 0.35rem;
}

.footer__copy {
  font-size: 0.72rem;
  color: var(--steel-dark);
  letter-spacing: 0.05em;
}

.footer__link {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--steel-dark);
  transition: color 0.2s;
}
.footer__link:hover { color: var(--crimson); }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 960px) {
  .hero__content { grid-template-columns: 1fr; gap: 3rem; }
  .hero__stat-block { max-width: 480px; }
  .about__inner { grid-template-columns: 1fr; gap: 3rem; }
  .contact__inner { grid-template-columns: 1fr; gap: 3rem; }
  .approach__inner { grid-template-columns: 1fr; gap: 2rem; }
  .section-header { flex-direction: column; gap: 1rem; }
  .expertise__grid { grid-template-columns: 1fr; }
  .expertise-card { border-right: none; border-bottom: 1px solid rgba(192,21,42,0.2); }
  .expertise-card:last-child { border-bottom: none; }
}

@media (max-width: 720px) {
  .nav__links { display: none; }
  .nav__hamburger { display: flex; }
  .form-row { grid-template-columns: 1fr; }
  .footer__inner { flex-direction: column; text-align: center; }
  .discipline-bar__inner { gap: 1rem; }
  .hero { padding: 8rem 1.5rem 4rem; }
  .container { padding: 0 1.5rem; }
}

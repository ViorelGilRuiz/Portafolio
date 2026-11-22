const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('open', open);
});
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}));

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -25px 0px', threshold: .08 });
  reveals.forEach((element) => revealObserver.observe(element));
}

const readingLine = document.querySelector('.reading-line');
let scrollScheduled = false;
const updateScroll = () => {
  const height = document.documentElement.scrollHeight - innerHeight;
  readingLine.style.width = `${height > 0 ? Math.min(100, scrollY / height * 100) : 0}%`;
  scrollScheduled = false;
};
addEventListener('scroll', () => {
  if (!scrollScheduled) { requestAnimationFrame(updateScroll); scrollScheduled = true; }
}, { passive: true });
updateScroll();

const navLinks = [...document.querySelectorAll('#main-nav a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  }, { rootMargin: '-20% 0px -65% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}


const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'block';
    nav.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', (!open).toString());
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').substring(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
      if (window.innerWidth < 900) { nav.style.display='none'; }
    }
  });
});

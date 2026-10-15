const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('open', !isOpen);
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
    });
  });
}

const reelRail = document.querySelector('.reel-rail');
const prevButton = document.querySelector('.rail-prev');
const nextButton = document.querySelector('.rail-next');
if (reelRail && prevButton && nextButton) {
  const scrollAmount = () => Math.min(reelRail.clientWidth * 0.78, 340);
  prevButton.addEventListener('click', () => reelRail.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
  nextButton.addEventListener('click', () => reelRail.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
}

document.querySelector('#year').textContent = new Date().getFullYear();

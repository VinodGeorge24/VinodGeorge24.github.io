window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));

  const flipCards = document.querySelectorAll('.flip-card');

  const toggleFlip = (card) => {
    card.classList.toggle('is-flipped');
    const isFlipped = card.classList.contains('is-flipped');
    card.setAttribute('aria-pressed', String(isFlipped));
  };

  Array.from(flipCards).forEach((card) => {
    card.addEventListener('click', () => toggleFlip(card));
  });
}

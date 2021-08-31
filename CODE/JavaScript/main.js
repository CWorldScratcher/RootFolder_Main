const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const Hamburger = document.getElementById('hamburger');
const Aside = document.getElementById('side-bar');

Hamburger.addEventListener('click', () => {
  setInterval(() => {
    Aside.classList.toggle('shown');
  }, interval);

});


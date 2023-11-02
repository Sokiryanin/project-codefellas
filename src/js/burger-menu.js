import { refs } from './refs';

refs.btnBurgerMenu.addEventListener('click', openBurgerMenu);

function openBurgerMenu() {
  refs.btnOpenMenuIcon.classList.toggle('is-open');
  refs.btnCloseMenuIcon.classList.toggle('is-close');
  refs.burgerMenu.classList.toggle('is-open');

  if (!refs.btnCloseMenuIcon.classList.contains('is-close')) {
    refs.body.style.overflow = 'hidden'; // блокуємо прокрутку при відкритому меню
    refs.navigation.classList.add('burger-navigation');
  } else {
    refs.body.style.overflow = 'auto'; // знімаємо блокування прокрутки
    refs.navigation.classList.remove('burger-navigation');
  }
}

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth > 767) {
    refs.burgerMenu.classList.remove('is-open');
    refs.btnOpenMenuIcon.classList.toggle('is-open');
    refs.btnCloseMenuIcon.classList.toggle('is-close');
    refs.navigation.classList.remove('burger-navigation');
  } else {
    refs.btnOpenMenuIcon.classList.toggle('is-open');
    refs.btnCloseMenuIcon.classList.toggle('is-close');
  }
});

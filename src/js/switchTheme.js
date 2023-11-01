import { refs } from './refs';
import { constants } from './constants';

refs.switcherTheme.addEventListener('change', switchTheme);

const { CURRENT_THEME } = constants;
const currentTheme = window.localStorage.getItem(CURRENT_THEME);

if (currentTheme === 'dark') {
  refs.body.classList.add('dark-theme');
  refs.switcherTheme.checked = true;
}

function switchTheme(e) {
  if (!currentTheme) {
    window.localStorage.setItem(CURRENT_THEME, 'light');
  }

  if (e.target.checked) {
    window.localStorage.setItem(CURRENT_THEME, 'dark');
  } else {
    window.localStorage.setItem(CURRENT_THEME, 'light');
  }

  refs.body.classList.toggle('dark-theme');
}

import { renderCategory } from './bestBooks';
import { getAllCategories } from './fetch';
import { refs } from './refs';
import { onClickCategory } from './selectedCategory';

const list = refs.categoriesList;

function renderCategoryList() {
  getAllCategories().then(resp => {
    list.insertAdjacentHTML('beforeend', createMarkup(resp));
  });
}

function createMarkup(list) {
  return list
    .map(({ list_name }) => {
      return `
    <li class="categories__item">
         <a href="" class="categories__link categories__link-js"
        ><span>${list_name}</span></span></spa></a>
        </li>
    `;
    })
    .join('');
}

renderCategoryList();

list.addEventListener('click', currentCategory);

function currentCategory(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'SPAN') {
    return;
  }

  const removeClass = document.querySelector('.current');
  removeClass.classList.remove('current');

  const currentEl = e.target;
  currentEl.classList.add('current');

  if (currentEl.textContent === 'All categories') {
    renderCategory();
  } else {
    onClickCategory(e.target.textContent);
  }
}

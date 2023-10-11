import axios from 'axios';
import { refs } from './refs';
import amazon from '../images/amazon.png';
import appleBooks from '../images/appleshop.png';
import svg from '../images/icon-trash.svg';

async function qwe() {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );

    const a = data[1]['books'];
    const b = data[2]['books'];
    const c = data[4]['books'];

    const shoppingList = [...a, ...b, ...c];

    const shoppingListToSave = shoppingList.reduce((acc, item) => {
      acc.push({
        id: item._id,
        title: item.title,
        author: item.author,
        image: item['book_image'],
        description: item.description,
        category: item['list_name'],
        links: item['buy_links'],
      });

      return acc;
    }, []);

    window.localStorage.setItem(
      'shoppingList',
      JSON.stringify(shoppingListToSave)
    );
  } catch (error) {
    console.log(error);
  }
}

qwe();

///////////////////////////////////////////
export default function createMarkupShoppingList(visibleBooks) {
  const booksList = refs.booksInShoppingList;

  const markup = visibleBooks
    .map(({ id, author, title, image, description, category, links }) => {
      return ` 
      <li class="books-card" id=${id}>
        <img
          class="books-card__image"
          src=${image}
          alt="book image"
        />

        <div class="books-card__info">
          <h2 class="books-card__title">${title}</h2>
          <p class="books-card__category">${category}</p>
          <p class="books-card__description">${description}</p>

          <div class="wrapper">
            <p class="books-card__author">${author}</p>
            <div class="wrapper-links">
              <a href=${links[0].url} target="_blank" class="books-card__link">
                <img src=${amazon} alt="Amazon" class="books-card__image-amazon" />
              </a>

              <a href=${links[1].url} target="_blank" class="books-card__link">
                <img src=${appleBooks} alt="Apple books" class="books-card__image-appleBooks" />
              </a>
            </div>
          </div>
        </div>
        <button type="button" class="button__delete" id=${id}>
          <img class="button__icon" alt="icon delete" src=${svg} id=${id}></img>
        </button>
      </li>
    `;
    })
    .join('');

  booksList.innerHTML = markup;
}

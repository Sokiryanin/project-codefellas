import { refs } from './refs';
import booksImage from '../images/empty-shopping-list.png';

export default function createMarkupEmptyPage() {
  const markup = `
    <div class="empty-shoping-list">
      <p class="empty-shoping-list__text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
        src=${booksImage}
        alt="Four books"
        class="empty-shoping-list__image"
      />
    </div>
    `;

  refs.titleShoppingList.insertAdjacentHTML('afterend', markup);
}

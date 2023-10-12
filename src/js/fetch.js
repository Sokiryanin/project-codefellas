import axios from 'axios';

const categoriesAll = 'https://books-backend.p.goit.global/books/category-list';
const topBooks = 'https://books-backend.p.goit.global/books/top-books';
const getCategory = 'https://books-backend.p.goit.global/books/category';
const bookInfo = 'https://books-backend.p.goit.global/books/';

// return all categories
export async function getAllCategories() {
  return axios.get(categoriesAll).then(response => {
    return response.data;
  });
}

// return top books
export async function getTopBooks() {
  return axios.get(topBooks).then(response => {
    return response.data;
  });
}

// return choose category
export async function getByCategory(categoryName) {
  return axios.get(`${getCategory}?category=${categoryName}`).then(response => {
    console.log(response.data);
    return response.data;
  });
}

getByCategory('Advice How-To and Miscellaneous');

// return bool by id
export async function getBookById(id) {
  return axios.get(`${bookInfo}${id}`).then(response => {
    return response.data;
  });
}

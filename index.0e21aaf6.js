!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequired7c6=r);var a=r("4Nugj"),s=r("bpxeT"),i=r("2TvXO"),c=r("dIxxU"),l="https://books-backend.p.goit.global/books/category-list",u="https://books-backend.p.goit.global/books/top-books",d="https://books-backend.p.goit.global/books/category",f="https://books-backend.p.goit.global/books/";function p(){return(p=t(s)(t(i).mark((function e(){return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.default.get(l).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return(g=t(s)(t(i).mark((function e(){return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.default.get(u).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(t){return _.apply(this,arguments)}function _(){return(_=t(s)(t(i).mark((function e(n){return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.default.get("".concat(d,"?category=").concat(n)).then((function(t){return console.log(t.data),t.data})));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function b(t){return k.apply(this,arguments)}function k(){return(k=t(s)(t(i).mark((function e(n){return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.default.get("".concat(f).concat(n)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}h("Advice How-To and Miscellaneous");var v="shoppingList",y=null;function x(){function t(){a.refs.modalWindow.classList.add("visually-hidden"),a.refs.body.classList.remove("locked"),a.refs.modalWindow.removeEventListener("click",e)}function e(e){e.target===a.refs.modalWindow&&t()}function n(e){"Escape"===e.code&&(t(),document.removeEventListener("keydown",n))}document.querySelectorAll(".category__item, .best-book__item").forEach((function(t){t.addEventListener("click",(function(){return function(t){a.refs.modalAuthor.textContent="",a.refs.modalTitle.textContent="",a.refs.modalDescription.textContent="",a.refs.modalImage.setAttribute("src",""),a.refs.modalLinkAmazon.setAttribute("href",""),a.refs.modalLinkApple.setAttribute("href",""),a.refs.modalLinkShop.setAttribute("href",""),b(t.dataset.id).then((function(t){var o;console.log(t),function(t){var e=t.author,n=t.title,o=t.description,r=t.book_image,s=t.buy_links;t._id;a.refs.modalAuthor.textContent=e,a.refs.modalTitle.textContent=n,a.refs.modalDescription.textContent=o,a.refs.modalImage.setAttribute("src",r),a.refs.modalLinkAmazon.setAttribute("href",s[0].url),a.refs.modalLinkApple.setAttribute("href",s[1].url),a.refs.modalLinkShop.setAttribute("href",s[4].url)}(t),o=t._id,-1===(JSON.parse(localStorage.getItem(v))||[]).findIndex((function(t){return t._id===o}))?(a.refs.modalButton.textContent="Add to shopping list",a.refs.modalUserInfo.textContent=""):(a.refs.modalButton.textContent="Remove from the shopping list",a.refs.modalUserInfo.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'),a.refs.modalWindow.classList.remove("visually-hidden"),a.refs.body.classList.add("locked"),a.refs.modalWindow.addEventListener("click",e),document.addEventListener("keydown",n),y=t})).catch((function(t){console.error("Error fetching book data:",t)}))}(t)}))})),a.refs.modalCloseBtn.addEventListener("click",t)}a.refs.modalButton.addEventListener("click",(function(){if(!y)return;var t={author:a.refs.modalAuthor.textContent,title:a.refs.modalTitle.textContent,description:a.refs.modalDescription.textContent,book_image:a.refs.modalImage.getAttribute("src"),buy_links:[{url:a.refs.modalLinkAmazon.getAttribute("href")},{url:a.refs.modalLinkApple.getAttribute("href")},{url:a.refs.modalLinkShop.getAttribute("href")}],_id:y._id},e=JSON.parse(localStorage.getItem(v))||[],n=e.findIndex((function(e){return e._id===t._id}));"Add to shopping list"===a.refs.modalButton.textContent?(e.push(t),localStorage.setItem(v,JSON.stringify(e)),a.refs.modalButton.textContent="Remove from the shopping list",a.refs.modalUserInfo.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'):(e.splice(n,1),localStorage.setItem(v,JSON.stringify(e)),a.refs.modalButton.textContent="Add to shopping list",a.refs.modalUserInfo.textContent="")})),r("ekC86");a=r("4Nugj");var L=(a=r("4Nugj")).refs.selectedCattegory;function A(t){h(t).then((function(t){var e,n,o,r,a;o=C((n=t)[0].list_name),r='<h2 class="category__title">'.concat(o,"</h2>"),a=n.map((function(t){return'<li class="category__item" data-id="'.concat(t._id,'">\n      <div class="category__item-wrap">\n        <div class="category__img-container">\n        <img class="category__item-img" src="').concat(t.book_image,' "/>\n        <p class="category__pop-up-text">\n                    quick view \n                  </p>\n        </div>\n        <p class="category__item-title">').concat(t.title,'</p>\n        <p class="category__item-author">').concat(t.author,"</p>\n        </li>")})).join(""),e='<div class="select-category-cont">'.concat(r,'<ul class="category__list">').concat(a,"</ul></div>"),L.innerHTML=e,x()})).catch(console.log)}function C(t){var e=t.split(" "),n=e.length,o="";if(n>1){for(var r=0;r<=n-2;r+=1)o+=" "+e[r];o+=" "+"<span class=title__last-word>".concat(e[n-1],"<span>")}else o="<span class=title__last-word>".concat(e[0],"<span>");return o}function w(t){var e=t.list_name,n=t.books,o='<h3 class="best-category__item-title">'.concat(e,"</h3>"),r=n.map((function(t){return' <li class="best-book__item" data-id="'.concat(t._id,'">\n      <div class="best-book__wrap">\n    <div class="best-book__img-container">\n      <img class="best-book__img" src="').concat(t.book_image,'" alt="').concat(t.title,'"/>\n      <p class="book__pop-up-text">\n                quick view \n              </p>\n              </div>\n      <h3 class="best-book__title">').concat(t.title,'</h3>\n      <p class="best-book__author">').concat(t.author,"</p>\n      </div>\n    </li>\n    ")})).join(""),a='<button class="seemore__btn" type="button" data-id="'.concat(e,'">See more</button>');return'<li class="best-category__item">'.concat(o,'<ul class="best-book__list">').concat(r,"</ul>").concat(a,"</li>")}function S(){m().then((function(t){var e,n='<div class=" best-category__container"><h2 class="best-category__title title-category__list">\n        '.concat(C("Best Sellers Books"),'</h2><ul class="best-category__list">').concat(t.map(w).join(""),"</ul></div>");e=n,a.refs.selectedCattegory.innerHTML=e,x()})).catch((function(t){console.log("Помилка при отриманні даних з сервера:",t)}))}S(),a.refs.selectedCattegory.addEventListener("click",(function(t){"BUTTON"===t.target.nodeName&&A(t.target.dataset.id)}));var T=(a=r("4Nugj")).refs.categoriesList;(function(){return p.apply(this,arguments)})().then((function(t){T.insertAdjacentHTML("beforeend",t.map((function(t){var e=t.list_name;return'\n    <li class="categories__item">\n         <a href="" class="categories__link categories__link-js"\n        ><span>'.concat(e,"</span></span></spa></a>\n        </li>\n    ")})).join(""))})),T.addEventListener("click",(function(t){if(t.preventDefault(),"SPAN"!==t.target.nodeName)return;document.querySelector(".current").classList.remove("current");var e=t.target;e.classList.add("current"),"All categories"===e.textContent?S():A(t.target.textContent)})),r("xpKCW")}();
//# sourceMappingURL=index.0e21aaf6.js.map
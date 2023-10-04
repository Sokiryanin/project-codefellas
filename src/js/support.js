import Swiper from 'swiper';
import { supportData } from './support-list';

const supportList = document.querySelector('.support__list-js');
const swiperDown = document.querySelector('.swiper-btn__down');
const swiperUp = document.querySelector('.swiper-btn__up');

let activeSwipeElemenet = 0;

if (window.innerWidth >= 768) {
  activeSwipeElemenet = 3;
} else {
  activeSwipeElemenet = 5;
}

swiperDown.addEventListener('click', () => {
  swiper.slideNext();

  if (
    supportList.children[activeSwipeElemenet].classList.contains(
      'swiper-slide-active'
    )
  ) {
    swiperDown.hidden = true;
    swiperUp.hidden = false;
  }
});

swiperUp.addEventListener('click', () => {
  swiper.slidePrev();

  if (supportList.children[0].classList.contains('swiper-slide-active')) {
    swiperDown.hidden = false;
    swiperUp.hidden = true;
  }
});

let position = 0;
const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupSupportList = ({ title, url, img, img_2x }, position) => `
<li class="support__item swiper-slide">
          <span class="support__item-text">${position}</span>
          <a class="support__link"
            target="_blank" 
            rel="noopener noreferrer nofollow"
            href="${url}" >
            <img
              src="${img}"
              srcset="${img} 1x, ${img_2x} 2x"
              alt="${title}"
              loading="lazy"
            />
          </a>
        </li>
`;

const markup = supportData
  .map((element, i) => {
    position = addLeadingZero(i + 1);

    return markupSupportList(element, position);
  })
  .join('');

supportList.innerHTML = markup;

const swiper = new Swiper('.my-swiper', {
  direction: 'vertical',
  //   spaceBetween: 20,
  slidesPerView: 'auto',

  navigation: {
    nextEl: swiperDown,
    prevEl: swiperUp,
  },

  plugins: {
    scrollContainer: true,
  },
});

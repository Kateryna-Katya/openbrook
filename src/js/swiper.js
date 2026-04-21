import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],

  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.gallery-btn.next',
    prevEl: '.gallery-btn.prev',
  },
});
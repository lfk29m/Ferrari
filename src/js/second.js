import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/second.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/menu.png';
import '../static/img/share.png';

import SPA1 from '../static/img/SPA1.jpg';
import SPA2 from '../static/img/SPA2.jpg';
import SPA3 from '../static/img/SPA3.jpg';
import SPA4 from '../static/img/SPA4.jpg';
import SPA5 from '../static/img/SPA5.jpg';

const sliderImgList = [SPA1, SPA2, SPA3, SPA4, SPA5]

$(document).ready(async function () {
  await slot.init()

  const owlC = new Owl({
    animateOut: 'fadeOut',
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }, sliderImgList)
  owlC.init('#sliderC-1')
})

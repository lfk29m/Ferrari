import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/fourth.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/menu.png';
import '../static/img/share.png';

import I1 from '../static/img/I1.jpg';
import I2 from '../static/img/I2.jpg';
import I3 from '../static/img/I3.jpg';
import I4 from '../static/img/I4.jpg';

const sliderImgList = [I1, I2, I3, I4]

$(document).ready(async function () {
  await slot.init()

  const owlA = new Owl({
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
  owlA.init('#sliderA-1')
})

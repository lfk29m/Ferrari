import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/six.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/red-more.png';
import '../static/img/menu.png';
import '../static/img/share.png';

import c11 from '../static/img/c11.jpg';
import c21 from '../static/img/c21.jpg';
import c31 from '../static/img/c31.jpg';
import c1 from '../static/img/c1.jpg';
import c2 from '../static/img/c2.jpg';
import c3 from '../static/img/c3.jpg';
import c4 from '../static/img/c4.jpg';
import c5 from '../static/img/c5.jpg';
import c6 from '../static/img/c6.jpg';

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
  }, [c11, c21, c31, c1, c2, c3, c4, c5, c6])
  owlC.init('#sliderC-1')
})

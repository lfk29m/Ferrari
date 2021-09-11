import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/third.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/menu.png';
import '../static/img/share.png';

import TW1 from '../static/img/TW1.jpg';
import TW2 from '../static/img/TW2.jpg';


const sliderImgListB = [TW1, TW2]

$(document).ready(async function () {
  await slot.init()

  const owlB = new Owl({
    loop: false,
    autoplay: false,
    autoWidth: true,
    items: 1,
  }, sliderImgListB)
  owlB.init('#sliderB-1')
})

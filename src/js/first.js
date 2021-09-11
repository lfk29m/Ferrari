import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/first.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/menu.png';
import '../static/img/share.png';

import F1 from '../static/img/F1.jpg';
import F2 from '../static/img/F2.jpg';
import F3 from '../static/img/F3.jpg';
import F4 from '../static/img/F4.jpg';
import F5 from '../static/img/F5.jpg';
import F6 from '../static/img/F6.jpg';

$(document).ready(async function () {
  await slot.init()

  new Owl({
    loop: false,
    autoplay: false,
    autoWidth: true,
    items: 1,
  }, [F1, F2, F3])
    .init('#sliderB-1')

  new Owl({
    loop: false,
    autoplay: false,
    autoWidth: true,
    items: 1,
  }, [F4, F5, F6])
    .init('#sliderB-2')

})

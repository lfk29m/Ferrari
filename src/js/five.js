import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/five.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/menu.png';
import '../static/img/share.png';
import '../static/img/more.png';
import '../static/img/player-btn.png';
import '../static/img/video.jpg';

import img1 from '../static/img/1.jpg';
import img2 from '../static/img/2.jpg';
import img3 from '../static/img/3.jpg';
import img4 from '../static/img/4.jpg';

$(document).ready(async function () {
  await slot.init()

  const owlB = new Owl({
    loop: false,
    autoplay: false,
    autoWidth: true,
    items: 1,
  }, [img1, img2, img3, img4])
  owlB.init('#sliderB-1')
})

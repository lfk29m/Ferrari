import slot from './lib/slot.js';
import Owl from './lib/owl.js';

import '../static/reset.css';
import '../scss/page/home.scss';

import '../static/img/logo-white.png';
import '../static/img/logo-black.png';
import '../static/img/more.png';
import '../static/img/red-more.png';
import '../static/img/player-btn.png';
import '../static/img/menu.png';
import '../static/img/share.png';
import F1 from '../static/img/F1.jpg';
import F2 from '../static/img/F2.jpg';
import F3 from '../static/img/F3.jpg';

const sliderImgList = [F1, F2, F3]

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

  const owlB = new Owl({
    loop: false,
    autoplay: false,
    autoWidth: true,
    items: 1,
  }, sliderImgList)
  owlB.init('#sliderB-1')

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

  const owlD = new Owl({
    loop: false,
    autoplay: false,
    autoWidth: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  }, sliderImgList)
  owlD.init('#sliderD-1')
  $('#sliderD-1 .sliderD__info').append($('#sliderD-1 .owl-nav'))
  $('#sliderD-1 .owl-carousel').append($('#sliderD-1 .more-btn'))
})

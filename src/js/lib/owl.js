class Owl {
  constructor(config, sliderImgList = []) {
    this.sliderImgList = sliderImgList
    this.config = {
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      ...config
    }
  }

  init(target) {
    console.log(target, this.config)
    this.target = target
    const owl = $(`${this.target} .owl-carousel`).owlCarousel(this.config)
    this.setImg()
    this.listen(owl)
    this.setDots()
    return owl
  }

  setImg() {
    const sliderImgList = this.sliderImgList,
      config = this.config
    if (this.sliderImgList.length == 0) return
    $(`${this.target} .slider-img`).each(function (i) {
      const modifyIndex = config.loop ? (i + 1) : i
      const index = modifyIndex % sliderImgList.length
      $(this).attr('src', sliderImgList[index])
    })
  }

  listen(owl) {
    const _this = this
    if (this.config.autoplay) {
      owl.on('changed.owl.carousel', function (e) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay');
      });
    }

    $(window).resize(function () {
      _this.setDots()
    })
  }

  setDots() {
    setTimeout(() => {
      const dots = $(`${this.target} .owl-dot`)
      dots.each(function (i) {
        $(this).html(`
        <span></span>
        <div class="progress">
          <div class="progress-left progress-loader">
              <div class="progress-bar"></div>
          </div>
          <div class="progress-right progress-loader">
              <div class="progress-bar"></div>
          </div>
        </div>
        `)
      })
    }, 500)
  }
}

export default Owl
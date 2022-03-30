import { fadeIn, fadeOut } from '../utils/animate'
import { getTarget, getEventType, Interval, throttle } from '../utils/tools'
export default class Carousel {
  constructor({ wait, auto, fadeDuration }) {
    this._wait = wait
    this._auto = auto
    this._fadeDuration = fadeDuration
    this._curIdx = 0 // 当前sliderItem索引
    this._interval = new Interval()

    this.elCarousel = document.querySelector('.J_carousel')

    this.elSliderItems = this.elCarousel.getElementsByClassName('slider-item')

    this.elindicators = this.elCarousel.getElementsByClassName('indicator-item')
  }

  init() {
    this.bindEvents()

    if (this._auto) {
      this.autoPlay()
    }
  }

  bindEvents() {
    this.elCarousel.addEventListener('mouseenter', this.mouseInout.bind(this))
    this.elCarousel.addEventListener('mouseleave', this.mouseInout.bind(this))
    this.elCarousel.addEventListener(
      'click',
      throttle((e) => {
        this.onCarouselClick(e)
      }, 100)
    )
  }

  mouseInout(e) {
    const eventType = getEventType(e)

    switch (eventType) {
      case 'mouseenter':
        this._interval.clear()
        break
      case 'mouseleave':
        this._auto && this.autoPlay()
        break
      default:
        break
    }
  }

  onCarouselClick(e) {
    const tar = getTarget(e)
    const className = tar.className

    switch (className) {
      case 'indicator-item':
        // console.log('tar:', tar)
        let index = Array.prototype.slice.call(this.elindicators).findIndex((item, index) => {
          return item === tar
        })
        this.sliderAction(index)
        break
      case 'iconfont icon-arrow-right':
        this.setIndex('next')
        break
      case 'iconfont icon-arrow-left':
        this.setIndex('prev')
        break

      default:
        break
    }
  }

  autoPlay() {
    console.log('1z:', 11)
    this._interval.set(() => {
      this.setIndex('next')
    }, this._wait)
  }

  setIndex(direction) {
    const len = this.elSliderItems.length
    switch (direction) {
      case 'next':
        this._curIdx = this._curIdx === len - 1 ? 0 : this._curIdx + 1
        break
      case 'prev':
        this._curIdx = this._curIdx === 0 ? len - 1 : this._curIdx - 1

        break

      default:
        break
    }
    this.sliderAction(this._curIdx)
  }

  sliderAction(idx) {
    // console.log('idx:',idx)
    Array.from(this.elSliderItems).forEach((item, index) => {
      if (index === idx) {
        fadeIn(this.elSliderItems[index], this._fadeDuration)
        item.className = item.className + ' current'
      } else {
        fadeOut(this.elSliderItems[index], this._fadeDuration)
        item.className = item.className.replace('current', '').trim()
      }
    })

    Array.from(this.elindicators).forEach((item, index) => {
      if (index === idx) {
        item.className = item.className + ' current'
      } else {
        item.className = item.className.replace('current', '').trim()
      }
    })
  }
}

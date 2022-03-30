function getTarget(ev) {
  const e = ev || window.event
  return e.target || e.srcElement
}
function getEventType(ev) {
  const e = ev || window.event
  return e.type
}

// 替代setInterval
class Interval {
  _timer = -1
  set(cb, wait, ...args) {
    let startTime = new Date().getTime()
    var interv = () => {
      let endTime = new Date().getTime()

      // console.log('endTime-startTime:', endTime - startTime)
      // console.log('-----------:')
      if (endTime - startTime > wait) {
        cb.call(null, ...args)
        startTime = endTime
      }
      this._timer = window.requestAnimationFrame(interv)
    }
    this._timer = window.requestAnimationFrame(interv)
  }
  clear() {
    window.cancelAnimationFrame(this._timer)
  }
}

function throttle(fn, duration) {
  let timer = null
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, duration)
    } else {
      return
    }
  }
}

function debounce(func, delay) {
  let timer = null

  return function (...args) {
    clearTimeout(t)
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, delay)
  }
}

export { getTarget, getEventType, Interval, throttle, debounce }

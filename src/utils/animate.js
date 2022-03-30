// fade out

function fadeOut(el, time) {
  el.style.opacity = 1
  let t = null
  ;(function fade() {
    var val = parseFloat(el.style.opacity) - (1 / 60 / time) * 1000
    if (val >= 0) {
      t = window.requestAnimationFrame(fade)
    }
  })()
}

// fade in

function fadeIn(el, time, display) {
  let t = null
  el.style.opacity = 0
  // el.style.display = display || 'block'
  ;(function fade() {
    var val = (el.style.opacity = parseFloat(el.style.opacity) + (1 / 60 / time) * 1000)
    if (val > 1) {
      el.style.opacity = 1
    } else {
      t = window.requestAnimationFrame(fade)
    }
  })()
}

export { fadeIn, fadeOut }

;(function (w) {
  let lastTime = 0
  console.log('w.requestAnimationFrame:',w.requestAnimationFrame)
  console.log('w.requestAnimationFrame:',w.requestAnimationFrame)
  let vendors = ['ms', 'moz', 'webkit', 'o']
  for (let x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {

    w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame']
    w.cancelAnimationFrame =
      w[vendors[x] + 'CancelAnimationFrame'] || w[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!w.requestAnimationFrame)

    w.requestAnimationFrame = function (callback, element) {
      let currTime = new Date().getTime()
      let timeToCall = Math.max(0, 16 - (currTime - lastTime))
      let id = w.setTimeout(function () {
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }

  if (!w.cancelAnimationFrame)

    w.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
})(window)

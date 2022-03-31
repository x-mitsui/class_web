const page_config = require('../configs/page')
const navData = require('../configs/nav')
const linkData = require('../configs/links')
const manualData = require('../configs/manual')
const { qr } = require('../configs/qr')
const { IMG_BASE_URL } = require('../configs/url')

class Error {
  async render(ctx, next) {
    await ctx.render('error', {
      CONFIG: page_config.ERROR,
      IMG_BASE_URL,
      qr,
      navData,
      linkData,
      manualData
    })
  }
}

module.exports = new Error()

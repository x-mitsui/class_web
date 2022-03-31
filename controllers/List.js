const page_config = require('../configs/page')
const navData = require('../configs/nav')
const linkData = require('../configs/links')
const manualData = require('../configs/manual')
const { qr } = require('../configs/qr')
const { IMG_BASE_URL } = require('../configs/url')

const { getCourseTabData } = require('../services/CourseTab')
class List {
  async render(ctx, next) {
    const courseTabData = await getCourseTabData()
    await ctx.render('list', {
      CONFIG: page_config.LIST,
      IMG_BASE_URL,
      qr,
      navData,
      linkData,
      manualData,
      courseTabData
    })
  }
}

module.exports = new List()

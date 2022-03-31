const page_config = require('../configs/page')
const navData = require('../configs/nav')
const linkData = require('../configs/links')
const manualData = require('../configs/manual')
const { qr } = require('../configs/qr')
const { IMG_BASE_URL } = require('../configs/url')
const { searchData } = require('../libs/utils')

const { getCourseTabData } = require('../services/CourseTab')
const { getCourseData } = require('../services/Course')

class List {
  async render(ctx, next) {
    const courseTabData = await getCourseTabData()
    const courseData = await getCourseData()

    const keyword = ctx.params.kw
    console.log('keyword:', keyword)
    console.log('searchData(courseData, keyword):', searchData(courseData, keyword))
    await ctx.render('list', {
      CONFIG: page_config.LIST,
      IMG_BASE_URL,
      qr,
      navData,
      linkData,
      manualData,
      courseTabData,
      courseData: keyword ? searchData(courseData, keyword) : courseData,
      courseDataStr: JSON.stringify(courseData)
    })
  }
}

module.exports = new List()

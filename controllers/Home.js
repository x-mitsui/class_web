const page_config = require('../configs/page')
const navData = require('../configs/nav')
const { IMG_BASE_URL } = require('../configs/url')

const { getSliderData } = require('../services/Slider')
const { getRecomCourseData } = require('../services/RecomCourse')
const { getCollectionData } = require('../services/Collection')
class Index {
  async index(ctx, next) {
    // 通过ejs渲染出了HTML，
    // 但是此HTML需要的css，js，img静态资源需要webpack打包提供，
    // 当然webpack不需要产生HTML
    // 总之：前端请求此服务器路由http:/localhost:3004/
    // 此无服务器渲染出HTML给前端

    const sliderData = await getSliderData()
    const recomCourseData = await getRecomCourseData()
    const collectionData = await getCollectionData()
    // console.log('collectionData:', collectionData)
    // note 调试小技巧，用ctx body调试
    ctx.body = collectionData
    // await ctx.render('index', {
    //   CONFIG: page_config.INDEX,
    //   navData,
    //   sliderData,
    //   recomCourseData,
    //   collectionData,
    //   IMG_BASE_URL
    // })
  }

  async list(ctx, next) {
    await ctx.render('list', {
      CONFIG: page_config.LIST
    })
  }

  async error(ctx, next) {
    await ctx.render('error', {
      CONFIG: page_config.ERROR
    })
  }
}

module.exports = new Index()

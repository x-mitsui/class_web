const page_config = require('../configs/page')

class Index {
  async index(ctx, next) {
    await ctx.render('index', {
      CONFIG: page_config.INDEX
    })
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

const RecomCourseModel = require('../db/models/recomCourse')

class RecomCourseService {
  async getRecomCourseData() {
    return await RecomCourseModel.findAll({
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'posterUrl', 'createdAt', 'updatedAt']
      },
      raw: true
    })
  }
}

module.exports = new RecomCourseService()

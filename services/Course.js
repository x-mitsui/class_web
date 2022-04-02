const CourseModel = require('../db/models/course')

class CourseService {
  async getCollectionCourseData(idList) {
    return await CourseModel.findAll({
      where: { cid: idList },
      attributes: {
        exclude: ['cid', 'posterUrl', 'field', 'createdAt', 'updatedAt']
      },
      raw: true
    })
  }

  async getCourseData() {
    return await CourseModel.findAll({
      where: { status: 1 },
      order: [
        ['id', 'DESC'] //按id倒序
      ],
      attributes: {
        exclude: ['cid', 'posterUrl', 'createdAt', 'updatedAt']
      },
      raw: true
    })
  }
}

module.exports = new CourseService()

const CourseModel = require('../db/models/Course')

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
}

module.exports = new CourseService()

const CourseTabModel = require('../db/models/courseTab')

class CourseTabService {
  async getCourseTabData(idList) {
    return await CourseTabModel.findAll({
      attributes: {
        exclude: ['cid', 'createdAt', 'updatedAt']
      },
      raw: true
    })
  }
}

module.exports = new CourseTabService()

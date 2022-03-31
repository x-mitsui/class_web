const TeacherModel = require('../db/models/Teacher')

class TeacherService {
  async getStarTeacherData() {
    return await TeacherModel.findAll({
      where: { status: 1, isStar: 1 },
      attributes: {
        exclude: ['tid', 'teacherImg', 'createdAt', 'updatedAt']
      },
      raw: true
    })
  }
}

module.exports = new TeacherService()

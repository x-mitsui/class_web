const StudentModel = require('../db/models/student')

class StudentService {
  async getStarStudentData() {
    return await StudentModel.findAll({
      where: { status: 1 },
      attributes: {
        exclude: ['sid', 'studentImg', 'createdAt', 'updatedAt']
      },
      raw: true
    })
  }
}

module.exports = new StudentService()

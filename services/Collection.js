const CollectionModel = require('../db/models/Collection')
const { getCollectionCourseData } = require('./Course')
class CollectionService {
  async getCollectionData() {
    let result = await CollectionModel.findAll({
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'posterUrl', 'createdAt', 'updatedAt']
      },
      raw: true
    })
    let promiseArr = result.map(async (item, index) => {
      let ids = item.courseIdList.split(',').map((item) => Number(item))
      let collectionsData = await getCollectionCourseData(ids)
      console.log('collectionsData:', collectionsData)
      item.courseIdList = collectionsData
      return item
    })
    // async返回的为包裹结果的Promise对象
    result = await Promise.all(promiseArr)
    return result
  }
}
// let p = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1")
//     })
//   })
// }
// async function foo(){
//   return await p();
// }
// foo().then(res=>console.log(res))

module.exports = new CollectionService()

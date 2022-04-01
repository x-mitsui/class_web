function searchData(data, keyword) {
  if (!keyword) {
    return data
  }
  return data.filter((item, index) => {
    return item.courseName.toLowerCase().includes(keyword.toLowerCase())
  })
}

module.exports = {
  searchData
}

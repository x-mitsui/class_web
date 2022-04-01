import { tplReplace, filterData, getTarget } from '../utils/tools'
import courseItemTpl from '../templates/courseItem.tpl'

import { IMG_BASE_URL } from '../../configs/url'
export default () => {
  const init = () => {
    bindEvent()
  }
  const elNavList = document.querySelector('.J_navList')
  const elCourseList = document.querySelector('.J_courseList')
  const navItems = elNavList.getElementsByClassName('nav-item')
  const courseData = JSON.parse(document.querySelector('#J_courseData').innerHTML)

  function bindEvent() {
    elNavList.addEventListener('click', onNavClick)
  }

  function onNavClick(e) {
    e.preventDefault()
    //
    let target = getTarget(e)
    console.log('className:', target.className)
    if (target.className.includes('nav-lk')) {
      tabChange(target)
      const data = filterData(courseData, target.dataset.id)
      renderList(data)
    }
  }

  function tabChange(el) {
    Array.from(navItems).forEach((item) => {
      item.className = item.className.replace(' current', '')
    })

    el.parentElement.className = el.parentElement.className + ' current'
  }

  function renderList(data) {
    //
    console.log('data:', courseItemTpl())
    let list = ''
    data.forEach((item, index) => {
      list += tplReplace(courseItemTpl(), {
        href: item.href,
        posterKey: IMG_BASE_URL + item.posterKey,
        courseName: item.courseName,
        priceClass: item.price === '0' ? 'left free' : 'left price',
        price: item.price === '0' ? '免费' : `￥${item.price}`,
        studentCount: item.studentCount
      })
    })

    elCourseList.innerHTML = list
  }

  return { init }
}

const { getTarget, trimSpace } = require('../utils/tools')

export default class HeaderSearch {
  constructor() {
    this.elHeaderSearch = document.querySelector('.J_headerSearch')

    this.elSearchInput = this.elHeaderSearch.getElementsByTagName('input')[0]

    this.elSearchBtn = this.elHeaderSearch.getElementsByTagName('button')[0]
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    this.elSearchBtn.addEventListener('click', this.onSearchAction.bind(this))
  }

  onSearchAction(e) {
    const val = trimSpace(this.elSearchInput.value)
    console.log('val:', val)
    if (val.length === 0) {
      return
    }

    window.open('/list/' + val)
  }
}

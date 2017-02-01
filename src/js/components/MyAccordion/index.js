import Template from './template.js'
import getData from '../../services/getData.js'

class MyAccordion {

  constructor (body) {
    this.body = body
  }

  init () {
    this.addClasses()
    this.addExtraPanel()
    this.addEventListener()
  }

  addClasses () {
    const elements = this.body.querySelectorAll('dt')

    Array.prototype.map.call(elements, (elem) => {
      elem.className = 'MyAccordion-title'
      elem.nextElementSibling.className = 'MyAccordion-content'
    })
  }

  addExtraPanel () {
    getData()
      .then(content => {
        this.body.innerHTML = this.body.innerHTML + Template.render(content)
      })
  }

  addEventListener () {
    this.body.addEventListener('click', this.collapse)
  }

  collapse (e) {
    const clickedElem = e.target
    if (clickedElem.nodeName === 'DT') {
      const titleBlocks = this.querySelectorAll('.MyAccordion-title')
      Array.prototype.map.call(titleBlocks, (elem) => {
        elem.nextElementSibling.className = 'MyAccordion-content'
      })
      clickedElem.nextElementSibling.className = 'MyAccordion-content--active'
    }
  }

}

module.exports = MyAccordion

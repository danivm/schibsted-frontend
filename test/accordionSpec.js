/* eslint-env mocha */

import {expect} from 'chai'

import MyAccordion from '../src/js/components/MyAccordion'

describe('MyAccordion', () => {
  it('should exists', () => {
    expect(MyAccordion).to.not.be.undefined
  })

  describe('An instance', () => {
    let accordion
    let newDl = document.createElement('dl')
    beforeEach(() => {
      accordion = new MyAccordion(newDl)
    })

    afterEach(() => {
      accordion = null
    })

    it('should have a body property', () => {
      expect(accordion.body).to.not.be.undefined
    })

    it('should have a body containing a DOM element', () => {
      expect(accordion.body.tagName).to.be.equal('DL')
    })

    it('should have a collapse function', () => {
      expect(accordion.collapse).to.be.a('function')
    })

  })
})

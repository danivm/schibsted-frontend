import MyAccordion from './components/MyAccordion'

window.onload = () => {
  const elem = document.querySelector('.MyAccordion')
  new MyAccordion(elem).init()
}

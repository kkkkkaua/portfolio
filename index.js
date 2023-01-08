import ScrollSuave from './assets/js/modules/scroll-suave.js'
import ScrollAnima from './assets/js/modules/scroll-anima.js'

const scrollSuave = new ScrollSuave('[data-suave] a[href^="#"')
scrollSuave.init()

const scrollAnima = new ScrollAnima('[data-section]')
scrollAnima.init()

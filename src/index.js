import _ from 'lodash'
import './assets/381504.jpg'
import './style/style.css'

import LandingPage from './landingPage'

init()

function addEventListeners() {
  const homeBtn = document.getElementsByClassName('home')
  const menuBtn = document.getElementsByClassName('menu')
  const About = document.getElementsByClassName('aboutUs')

  homeBtn.addEventListener('click', LandingPage)
  menuBtn.addEventListener('click', menu)
  About.addEventListener('click', aboutUs)
}

function init() {
  LandingPage()
  addEventListeners()
}

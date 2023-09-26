import _ from 'lodash'
import './style/style.css'
import contactPage from './contactPage'
import footer from './footer'
import renderNav from './navBar'
import header from './header'
import contentPrvaStr from './opisPrvaStr'

const renderHome = () => {
  header()
  renderNav()
  contentPrvaStr()
  footer()
}

renderHome()

//landing page header
const createHeader = (text, src) => {
  const header = document.createElement('header')
  header.classList.add('header')
  const logo = document.createElement('img')
  logo.classList.add('logo')
  logo.setAttribute('src', src)
  const name = document.createElement('h1')
  name.textContent = text
  header.appendChild(logo)
  header.appendChild(name)

  return header
}

//navigation bar with custom text
const createNav = (text1, text2, text3) => {
  const nav = document.createElement('nav')
  nav.classList.add('navBar')
  const navItem1 = document.createElement('div')
  navItem1.textContent = text1
  navItem1.classList.add('home')
  const navItem2 = document.createElement('div')
  navItem2.textContent = text2
  navItem2.classList.add('menu')
  const navItem3 = document.createElement('div')
  navItem3.textContent = text3
  navItem3.classList.add('about')

  nav.appendChild(navItem1)
  nav.appendChild(navItem2)
  nav.appendChild(navItem3)
  return nav
}

const createAboutUs = text => {
  const about = document.createElement('div')
  const aboutUs = document.createElement('h2')
  aboutUs.textContent = text
  aboutUs.classList.add('aboutUs')
  about.classList.add('aboutdiv')
  about.appendChild(aboutUs)
  return about
}

function createFooter(id, text) {
  const footer = document.createElement('footer')
  footer.setAttribute('id', id)
  const h3 = document.createElement('h3')
  h3.textContent = text
  footer.appendChild(h3)
  return footer
}

const LandingPage = () => {
  const content = document.getElementById('content')
  content.classList.add('landingPage')

  content.textContent = ''

  const header = createHeader('Pizzeria EX', './assets/logo.jpg')
  const nav = createNav('Home', 'Menu', 'Contact')
  const aboutUs = createAboutUs(
    'Pizzerija EX nalazi se u centru Srdoča i već sedamnaest godina pruža ugostiteljske usluge. Osim standardnih napitaka i pića, ovdje se nude razne vrste pašta, pizze i jednostavna mesna jela po iznimno povoljnim cijenama.'
  )
  const footer = createFooter('footer', 'Footercina ogromna')

  content.appendChild(header)
  content.appendChild(nav)
  content.appendChild(aboutUs)
  content.appendChild(footer)
}

export default LandingPage

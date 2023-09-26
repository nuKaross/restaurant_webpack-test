//navigation bar with custom text

const renderNav = () => {
  const nav = document.createElement('nav')
  nav.classList.add('navBar')
  const navItem1 = document.createElement('div')
  navItem1.textContent = 'HOME'
  navItem1.classList.add('home')
  const navItem2 = document.createElement('div')
  navItem2.textContent = 'MENU'
  navItem2.classList.add('menu')
  const navItem3 = document.createElement('div')
  navItem3.textContent = 'CONTACTS'
  navItem3.classList.add('contacts')

  nav.appendChild(navItem1)
  nav.appendChild(navItem2)
  nav.appendChild(navItem3)
  return nav
}

export default renderNav

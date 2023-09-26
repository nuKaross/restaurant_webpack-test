const contact = (adresa, mobitel, src) => {
  const contacts = document.createElement('div')
  form.classList.add('contactsList')
  const adr = document.createElement('h3')
  adresa.textContent = adresa
  contacts.appendChild(adr)

  const mob = document.createElement('h3')
  mobitel.textContent = mobitel
  contacts.appendChild(mobitel)

  const radnoVr = document.createElement('img')
  radnoVr.setAttribute('id', 'radnoVr')
  radnoVr.setAttribute('src', src)
  contacts.appendChild(radnoVr)
  return contact
}

const createContacts = () => {
  const content = document.getElementsByClassName('content')
  content.textContent = ''
  const contacts = contact('Mate Lovraka 24', '0921030128', './assets/Radno.jpg')
  contacts.classList.add('contactsContainer')
  content.appendChild(contact)
  return content
}

export default createContacts

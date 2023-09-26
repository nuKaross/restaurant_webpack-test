const header = () => {
  const header = document.createElement('header')
  header.classList.add('header')
  const name = document.createElement('h1')
  name.textContent = 'PIZZERIA EX'
  header.appendChild(name)

  return header
}



export default header

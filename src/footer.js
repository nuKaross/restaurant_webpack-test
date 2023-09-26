function footer() {
  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')
  const h3 = document.createElement('h3')
  h3.textContent = 'Ovo je jebacki futer'
  footer.appendChild(h3)
  return footer
}

export default footer

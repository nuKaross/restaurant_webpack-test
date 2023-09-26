const contentPrvaStr = () => {
  const about = document.createElement('div')
  const aboutUs = document.createElement('h2')
  aboutUs.textContent =
    'Pizzerija EX nalazi se u centru Srdoča i već sedamnaest godina pruža ugostiteljske usluge. Osim standardnih napitaka i pića, ovdje se nude razne vrste pašta, pizze i jednostavna mesna jela po iznimno povoljnim cijenama.'
  aboutUs.classList.add('aboutUs')
  about.classList.add('aboutdiv')
  about.appendChild(aboutUs)
  return about
}

export default contentPrvaStr

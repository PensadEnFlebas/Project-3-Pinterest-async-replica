//* IMPORT

import { createElement } from '../utils/create-elements'
import { cardTemplate } from './card-template'
import { searchPhotos } from '../utils/unsplash-api'

export async function cardSection(keyword = 'cat') {
  const main = document.querySelector('main')
  let cardSection = document.querySelector('.cardSection')

  if (!cardSection) {
    cardSection = createElement('section', {
      className: 'cardSection'
    })
    main.appendChild(cardSection)
  }

  const imgContainer =
    document.querySelector('.imgContainer') ||
    createElement('ul', { className: 'imgContainer' })

  imgContainer.innerHTML = ''

  try {
    const images = await searchPhotos(keyword)

    if (images?.response?.results?.length) {
      const allPhotos = images.response.results

      for (let i = allPhotos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[allPhotos[i], allPhotos[j]] = [allPhotos[j], allPhotos[i]]
      }

      allPhotos.forEach((photo) => {
        const card = cardTemplate(photo)

        const cardImg = card.querySelector('.cardImg')

        if (cardImg) {
          cardImg.style.setProperty(
            'background',
            `linear-gradient(#131219, ${photo.color}) padding-box,
            linear-gradient(var(--angle), #070707, ${photo.color}) border-box`
          )
        }

        imgContainer.appendChild(card)
      })
    } else {
      imgContainer.innerHTML = '<p class = "errorMessage">No results found</p>'
    }
  } catch (error) {
    imgContainer.innerHTML = `<p class = "errorMessage">Error loading images: ${error.message}. Try again</p>`
  }

  cardSection.appendChild(imgContainer)
}

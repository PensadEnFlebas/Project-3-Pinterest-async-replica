//* IMPORTS

import { createElement } from '../utils/create-elements'
import { printRatiosInfo, printUserInfo } from './card-info'

export function cardTemplate(photo) {
  const card = createElement('li', {
    className: 'card'
  })

  const cardImg = createElement('img', {
    className: 'cardImg',
    src: photo.urls.small,
    alt: photo.alt_description || 'Photo',
    loading: 'lazy'
  })

  const cardButton = createElement('button', {
    className: 'cardButton',
    textContent: 'Go to...'
  })

  card.append(
    printRatiosInfo(photo, 'photos'),
    printRatiosInfo(photo, 'likes'),
    cardImg,
    cardButton,
    printUserInfo(photo)
  )

  return card
}

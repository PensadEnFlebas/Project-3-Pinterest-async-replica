//* IMPORT

import { createElement } from '../utils/create-elements'

export function printRatiosInfo(photo, type) {
  const ratiosContainer = createElement('div', {
    className: 'ratiosContainer'
  })

  let infoIcon

  const numberContainer = createElement('div', {
    className: 'numberContainer'
  })

  let numberP = createElement('p', {
    className: 'numberP'
  })

  if (type === 'likes') {
    infoIcon = createElement('img', {
      classList: 'likesIcon ratiosIcon',
      src: '/assets/like-icon.svg.png',
      alt: 'Likes Icon',
      loading: 'lazy'
    })
    numberP.textContent = `${photo.likes}`
  } else if (type === 'photos') {
    infoIcon = createElement('img', {
      className: 'photosIcon ratiosIcon',
      src: '/assets/camera-icon.png',
      alt: 'Camera Icon',
      loading: 'lazy'
    })
    numberP.textContent = `${photo.user.total_photos}`
  }

  numberContainer.appendChild(numberP)
  ratiosContainer.append(infoIcon, numberContainer)

  return ratiosContainer
}

export function printUserInfo(photo) {
  const userInfoContainer = createElement('div', {
    className: 'userInfoContainer'
  })

  const userImg = createElement('img', {
    className: 'userImg',
    src: photo.user.profile_image?.large || '/assets/default_profile.png',
    alt: `${photo.user.name || 'Unknown user'} Profile Image`,
    loading: 'lazy'
  })

  const userName = createElement('p', {
    className: 'userName',
    textContent: photo.user.name || 'Unknown user'
  })

  const userDateDiv = createElement('div', {
    className: 'userDateDiv'
  })

  const uploadedIcon = createElement('img', {
    className: 'uploadedIcon',
    src: '/assets/upload_icon.png',
    alt: 'Uploaded Icon',
    loading: 'lazy'
  })

  const userDateP = createElement('p', {
    className: 'userDateP',
    textContent: new Date(photo.created_at).toLocaleDateString()
  })

  userDateDiv.append(uploadedIcon, userDateP)
  userInfoContainer.append(userImg, userName, userDateDiv)

  return userInfoContainer
}

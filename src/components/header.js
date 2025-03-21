//* IMPORTS

import { switchMode } from '../utils/dark-mode-switch'
import { createElement } from '../utils/create-elements'
import { adjustMainMargin } from '../utils/margin-top-adjustment'
import { cardSection } from './card-section'

export function header() {
  const header = document.querySelector('header')

  const headerElementsContainer = createElement('div', {
    className: 'headerElementsContainer'
  })

  const h1 = createElement('h1', {
    textContent: 'GOBLIN EYE PROYECT'
  })

  const logoImg = createElement('img', {
    className: 'logoImg',
    title: 'Goblin Eye Logo',
    src: '/assets/Goblin_Eye_sprite_004.webp',
    alt: 'Goblin Eye Logo',
    loading: 'lazy'
  })

  logoImg.addEventListener('click', () => {
    searchInput.value = ''
    cardSection('cat')
  })

  const searchDiv = createElement('div', {
    className: 'searchDiv'
  })

  const searchInput = createElement('input', {
    id: 'searchInput',
    type: 'text',
    placeholder: 'Search...'
  })

  const searchButton = createElement('button', {
    id: 'searchButton',
    title: 'Searching Button'
  })

  const searchButtonImg = createElement('img', {
    className: 'searchButtonImg',
    src: '/assets/search_icon.png',
    alt: 'Search Icon',
    loading: 'lazy'
  })

  const darkThemeButton = createElement('button', {
    id: 'darkThemeButton',
    title: 'Switching Theme Button'
  })

  const darkThemeIcon = createElement('img', {
    id: 'darkThemeIcon',
    src: '/assets/dark_mode_icon.png',
    alt: 'Dark theme icon',
    loading: 'lazy'
  })

  const profileContainer = createElement('div', {
    className: 'profileContainer',
    title: 'User logged'
  })

  const profileImg = createElement('img', {
    className: 'profileImg',
    src: '/assets/profile_icon.png',
    alt: 'Profile default icon',
    loading: 'lazy'
  })

  const profileName = createElement('p', {
    className: 'profileName',
    textContent: 'Goblin'
  })

  searchButton.addEventListener('click', handleSearch)

  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  })

  function handleSearch() {
    const keyword = searchInput.value.trim()
    if (keyword) {
      cardSection(keyword)
      searchInput.value = ''
    }
  }

  searchButton.appendChild(searchButtonImg)
  darkThemeButton.appendChild(darkThemeIcon)
  searchDiv.append(searchInput, searchButton)
  profileContainer.append(profileImg, profileName)
  headerElementsContainer.append(
    h1,
    logoImg,
    searchDiv,
    darkThemeButton,
    profileContainer
  )
  header.appendChild(headerElementsContainer)

  switchMode()
  adjustMainMargin()
}

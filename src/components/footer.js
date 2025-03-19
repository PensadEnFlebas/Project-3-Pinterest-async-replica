import { createElement } from '../utils/create-elements'

export const footer = () => {
  const footer = document.querySelector('footer')

  const footerText = createElement('h4', {
    textContent: '© Copyright 2025 - Goblin Eye, a Pinterest async replica'
  })

  footer.appendChild(footerText)
}

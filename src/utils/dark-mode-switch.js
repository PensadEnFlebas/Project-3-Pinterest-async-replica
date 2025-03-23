export const switchMode = () => {
  const body = document.querySelector('body')
  const header = document.querySelector('header')
  const darkmodebtn = document.querySelector('#darkThemeButton')
  const darkThemeIcon = document.querySelector('#darkThemeIcon')

  const checkingMode = localStorage.getItem('theme')
  if (checkingMode === 'dark') {
    body.classList.add('dark')
    header.classList.add('dark')
    darkThemeIcon.src = '/assets/light_mode_icon.png'
  }

  darkmodebtn.addEventListener('click', () => {
    const darkMode = body.classList.toggle('dark')
    header.classList.toggle('dark')

    darkThemeIcon.src = darkMode
      ? '/assets/light_mode_icon.png'
      : '/assets/dark_mode_icon.png'

    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  })
}

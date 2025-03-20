export function adjustMainMargin() {
  const header = document.querySelector('header')
  const main = document.querySelector('main')

  const resizeObserver = new ResizeObserver(() => {
    const headerHeight = header.offsetHeight
    main.style.marginTop = `${headerHeight}px`
  })

  resizeObserver.observe(header)
}

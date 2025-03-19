export function adjustMainMargin() {
  const header = document.querySelector('header')
  const main = document.querySelector('main')

  const resizeObserver = new ResizeObserver(() => {
    const headerHeight = header.offsetHeight
    main.style.marginTop = `${headerHeight}px`
  })

  resizeObserver.observe(header)
}

// export function setScrollMarginTop(referenceElement, targetElement) {
//   function updateScrollMargin() {
//     const refHeight = referenceElement.offsetHeight
//     targetElement.style.scrollMarginTop = `${refHeight}px`
//   }

//   const resizeObserver = new ResizeObserver(updateScrollMargin)
//   resizeObserver.observe(referenceElement)

//   updateScrollMargin()
// }

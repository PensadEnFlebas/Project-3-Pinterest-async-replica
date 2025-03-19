export function createElement(tag, attributes) {
  return Object.assign(document.createElement(tag), attributes)
}

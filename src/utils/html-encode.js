
const htmlEencode = (string) => {
  const el = document.createElement('div')
  el.innerHTML = string
  return el.innerHTML
}

export default htmlEencode

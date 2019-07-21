import config from 'app-config'

export default () => {
  const { languages } = config

  let lang = null

  const langPath = window.location.pathname
    .match(/\/[a-z]{2}\/|\/[a-z]{2}$/)

  if (!langPath) {
    return lang
  }

  languages.some((item) => {
    if (langPath[0].indexOf(item) !== -1) {
      lang = item
      return true
    }
    return false
  })

  return lang
}

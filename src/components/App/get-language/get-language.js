import getLangFromUrl from './get-language-from-url'

export default () => {
  const lang = getLangFromUrl()

  if (lang !== null) {
    return lang
  }

  return localStorage.getItem('language')
}

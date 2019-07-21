import config from 'app-config'

const { languages } = config

export default `/${languages.join('|/')}`

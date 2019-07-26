import { CHANGE_LANGUAGE } from '../constants'

const setLanguage = language => (
  {
    type: CHANGE_LANGUAGE,
    payLoad: language,
  }
)

export default setLanguage

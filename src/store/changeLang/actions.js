import { OPEN_CHANGE_LANG_LIST, CLOSE_CHANGE_LANG_LIST } from '../constants'

export const openLangList = () => (
  {
    type: OPEN_CHANGE_LANG_LIST,
  }
)
export const closeLangList = () => (
  {
    type: CLOSE_CHANGE_LANG_LIST,
  }
)

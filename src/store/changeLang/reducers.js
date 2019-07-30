import { OPEN_CHANGE_LANG_LIST, CLOSE_CHANGE_LANG_LIST } from '../constants'

const defaultState = {
  isOpen: false,
}

const changeLangReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_CHANGE_LANG_LIST:
      return { ...state, isOpen: true }
    case CLOSE_CHANGE_LANG_LIST:
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export default changeLangReducer

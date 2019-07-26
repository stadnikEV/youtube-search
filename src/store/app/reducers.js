import { CHANGE_LANGUAGE } from '../constants'

const defaultState = {
  language: null,
}

const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payLoad }
    default:
      return state
  }
}

export default languageReducer

import {
  SHOW_SEARCH_LIST,
  HIDE_SEARCH_LIST,
} from 'store/constants'

const defaultState = {
  searchList: null,
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case (SHOW_SEARCH_LIST):
      return { ...state, searchList: action.payLoad }
    case (HIDE_SEARCH_LIST):
      return { ...state, searchList: action.payLoad }
    default:
      return state
  }
}

export default searchReducer

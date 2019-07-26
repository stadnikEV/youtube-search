import {
  SHOW_SEARCH_DROPDOWN,
  HIDE_SEARCH_DROPDOWN,
} from 'store/constants'

const defaultState = {
  videoList: null,
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case (SHOW_SEARCH_DROPDOWN):
      return { ...state, videoList: action.payLoad }
    case (HIDE_SEARCH_DROPDOWN):
      return { ...state, videoList: action.payLoad }
    default:
      return state
  }
}

export default searchReducer

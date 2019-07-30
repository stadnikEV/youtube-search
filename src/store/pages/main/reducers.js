import { SHOW_PLAYER, HIDE_PLAYER } from 'store/constants'

const defaultState = {
  player: false,
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_PLAYER: {
      return { ...state, player: action.payLoad }
    }
    case HIDE_PLAYER: {
      return { ...state, player: action.payLoad }
    }
    default:
      return state
  }
}

export default mainReducer

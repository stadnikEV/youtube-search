import { SHOW_PLAYER } from 'store/constants'

const defaultState = {
  player: { id: null },
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_PLAYER: {
      return { ...state, player: action.payLoad }
    }
    default:
      return state
  }
}

export default mainReducer

import {
  SET_PLAYER_CLICK_CUPTURE,
  REMOVE_PLAYER_CLICK_CUPTURE,
  SHOW_YOUTUBE_IFRAME,
  HIDE_YOUTUBE_IFRAME,
} from 'store/constants'

const defaultState = {
  clickCapture: false,
  youtubeIframe: true,
}

const playerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case (SET_PLAYER_CLICK_CUPTURE):
      return { ...state, clickCapture: action.payLoad }
    case (REMOVE_PLAYER_CLICK_CUPTURE):
      return { ...state, clickCapture: action.payLoad }
    case (SHOW_YOUTUBE_IFRAME):
      return { ...state, youtubeIframe: action.payLoad }
    case (HIDE_YOUTUBE_IFRAME):
      return { ...state, youtubeIframe: action.payLoad }
    default:
      return state
  }
}

export default playerReducer

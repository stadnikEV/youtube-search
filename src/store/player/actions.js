import {
  SET_PLAYER_CLICK_CUPTURE,
  REMOVE_PLAYER_CLICK_CUPTURE,
  SHOW_YOUTUBE_IFRAME,
  HIDE_YOUTUBE_IFRAME,
} from 'store/constants'

export const setPlayerClickCupture = () => (
  {
    type: SET_PLAYER_CLICK_CUPTURE,
    payLoad: true,
  }
)

export const removePlayerClickCupture = () => (
  {
    type: REMOVE_PLAYER_CLICK_CUPTURE,
    payLoad: false,
  }
)

export const showYoutubeIfarame = () => (
  {
    type: SHOW_YOUTUBE_IFRAME,
    payLoad: true,
  }
)

export const hideYoutubeIfarame = () => (
  {
    type: HIDE_YOUTUBE_IFRAME,
    payLoad: false,
  }
)

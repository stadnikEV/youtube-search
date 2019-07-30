import { SHOW_PLAYER, HIDE_PLAYER } from 'store/constants'

export const showPlayer = () => (
  {
    type: SHOW_PLAYER,
    payLoad: true,
  }
)

export const hidePlayer = () => (
  {
    type: HIDE_PLAYER,
    payLoad: false,
  }
)

import { SHOW_PLAYER } from 'store/constants'

const showPlayer = videoList => (
  {
    type: SHOW_PLAYER,
    payLoad: videoList,
  }
)

export default showPlayer

import {
  SAVE_LAST_VIDEO,
  PUT_WATCHED_VIDEOS,
  DELETE_WATCHED_VIDEO,
} from 'store/constants'

export const saveLastVideo = lastVideo => (
  {
    type: SAVE_LAST_VIDEO,
    payLoad: lastVideo,
  }
)

export const putWatchedVideos = videoList => (
  {
    type: PUT_WATCHED_VIDEOS,
    payLoad: videoList,
  }
)

export const deleteWatchedVideo = deletedVideo => (
  {
    type: DELETE_WATCHED_VIDEO,
    payLoad: deletedVideo,
  }
)

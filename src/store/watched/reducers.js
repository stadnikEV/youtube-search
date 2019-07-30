import {
  SAVE_LAST_VIDEO,
  PUT_WATCHED_VIDEOS,
  DELETE_WATCHED_VIDEO,
} from 'store/constants'

const defaultState = {
  videoList: [],
}

const watchedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case (SAVE_LAST_VIDEO): {
      const { videoList } = state
      const list = [...videoList]
      const { id } = action.payLoad
      // if video exists
      list.some((item, index) => {
        if (item.id === id) {
          list.splice(index, 1)
          return true
        }
        return false
      })

      list.unshift(action.payLoad)
      if (list.length > 5) list.pop()

      return { ...state, videoList: list }
    }


    case (PUT_WATCHED_VIDEOS):
      return { ...state, videoList: action.payLoad }


    case (DELETE_WATCHED_VIDEO): {
      const { videoList } = state
      const list = [...videoList]
      const { id } = action.payLoad

      list.some((item, index) => {
        if (item.id === id) {
          list.splice(index, 1)
          return true
        }
        return false
      })

      return { ...state, videoList: list }
    }


    default:
      return state
  }
}

export default watchedReducer

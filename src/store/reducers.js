import { combineReducers } from 'redux'

import mainReducers from 'store/pages/main/reducers'
import appReducers from 'store/app/reducers'
import searchReducers from 'store/search/reducers'
import watchedVideosReducers from 'store/watchedVideos/reducers'

export default combineReducers({
  app: appReducers,
  main: mainReducers,
  search: searchReducers,
  watchedVideos: watchedVideosReducers,
})

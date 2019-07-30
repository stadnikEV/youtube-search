import { combineReducers } from 'redux'

import mainReducers from 'store/pages/main/reducers'
import appReducers from 'store/app/reducers'
import searchReducers from 'store/search/reducers'
import watchedReducers from 'store/watched/reducers'
import changeLangReducers from 'store/changeLang/reducers'
import playerReducers from 'store/player/reducers'

export default combineReducers({
  app: appReducers,
  main: mainReducers,
  search: searchReducers,
  watched: watchedReducers,
  changeLang: changeLangReducers,
  player: playerReducers,
})

import {
  SHOW_SEARCH_LIST,
  HIDE_SEARCH_LIST,
} from 'store/constants'

export const showSearchList = searchList => (
  {
    type: SHOW_SEARCH_LIST,
    payLoad: searchList,
  }
)

export const hideSearchList = () => (
  {
    type: HIDE_SEARCH_LIST,
    payLoad: null,
  }
)

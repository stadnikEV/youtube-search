import {
  SHOW_SEARCH_DROPDOWN,
  HIDE_SEARCH_DROPDOWN,
} from 'store/constants'

export const showSearchDropdown = videoList => (
  {
    type: SHOW_SEARCH_DROPDOWN,
    payLoad: videoList,
  }
)

export const hideSearchDropdown = () => (
  {
    type: HIDE_SEARCH_DROPDOWN,
    payLoad: null,
  }
)

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import { hideSearchDropdown } from 'store/search/actions'
import SearchDropdownItem from 'components/_dropdown/SearchDropdownItem'

import './style.scss'


class SearchDropdown extends PureComponent {
  state = {}

  static propTypes = {
    videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    hideSearchDropdown: PropTypes.func.isRequired,
  }

  handleClickOutside = () => {
    const { hideSearchDropdown: hideDropdown } = this.props
    hideDropdown()
  }

  render() {
    const { videoList } = this.props

    const list = videoList.map(video => (
      <li
        key={video.id}
      >
        <SearchDropdownItem video={video} />
      </li>
    ))

    return (
      <div className="search-dropdown">
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    videoList: state.search.videoList,
  }
)

const mapDispatchToProps = {
  hideSearchDropdown,
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(SearchDropdown))

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hideSearchDropdown } from 'store/search/actions'
import { saveLastVideo } from 'store/watchedVideos/actions'
import showPlayer from 'store/pages/main/actions'
import SearchDropdownItemComponent from './Component'


class SearchDropdownItem extends PureComponent {
  state = {}

  static propTypes = {
    video: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumb: PropTypes.string,
      voites: PropTypes.string,
    }).isRequired,
    showPlayer: PropTypes.func.isRequired,
    hideSearchDropdown: PropTypes.func.isRequired,
    saveLastVideo: PropTypes.func.isRequired,
  }

  onClickPlay = () => {
    const {
      showPlayer: showPLR,
      hideSearchDropdown: hideDropdown,
      saveLastVideo: saveVideo,
      video,
    } = this.props

    const { id, title } = video

    showPLR({ id, title })
    hideDropdown()
    saveVideo({ id, title })
  }

  render() {
    const { video } = this.props

    return (
      <SearchDropdownItemComponent
        thumb={video.thumb}
        title={video.title}
        voites={video.voites}
        onClickPlay={this.onClickPlay}
      />
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = {
  showPlayer,
  hideSearchDropdown,
  saveLastVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdownItem)

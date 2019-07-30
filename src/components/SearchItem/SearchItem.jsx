import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hideSearchList } from 'store/search/actions'
import { saveLastVideo } from 'store/watched/actions'
import {
  removePlayerClickCupture,
  showYoutubeIfarame,
} from 'store/player/actions'
import { showPlayer } from 'store/pages/main/actions'
import SearchItemComponent from './Component'

import './style.scss'

class SearchItem extends PureComponent {
  state = {}

  static propTypes = {
    video: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumb: PropTypes.string,
      votes: PropTypes.string,
    }).isRequired,
    showPlayer: PropTypes.func.isRequired,
    showYoutubeIfarame: PropTypes.func.isRequired,
    hideSearchList: PropTypes.func.isRequired,
    saveLastVideo: PropTypes.func.isRequired,
    removePlayerClickCupture: PropTypes.func.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    language: null,
  }

  onClickPlay = () => {
    const {
      showPlayer: showPLR,
      hideSearchList: hideList,
      saveLastVideo: saveVideo,
      removePlayerClickCupture: removeClickCupture,
      showYoutubeIfarame: showIfarame,
      video,
    } = this.props

    const { id, title } = video

    showPLR()
    showIfarame()
    hideList()
    saveVideo({ id, title })
    removeClickCupture()
  }

  render() {
    const { video, language } = this.props

    return (
      <SearchItemComponent
        thumb={video.thumb}
        title={video.title}
        votes={video.votes}
        onClickPlay={this.onClickPlay}
        language={language}
      />
    )
  }
}

const mapStateToProps = state => (
  {
    language: state.app.language,
  }
)

const mapDispatchToProps = {
  showPlayer,
  showYoutubeIfarame,
  hideSearchList,
  saveLastVideo,
  removePlayerClickCupture,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem)

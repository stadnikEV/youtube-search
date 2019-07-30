import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteWatchedVideo, saveLastVideo } from 'store/watched/actions'
import { hidePlayer } from 'store/pages/main/actions'
import WatchedItemComponent from './Component'

class WatchedItem extends PureComponent {
  state = {}

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteWatchedVideo: PropTypes.func.isRequired,
    hidePlayer: PropTypes.func.isRequired,
    saveLastVideo: PropTypes.func.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    language: null,
  }

  onClickDelete = () => {
    const {
      id,
      title,
      videoList,
      deleteWatchedVideo: deleteVideo,
      hidePlayer: hidePLR,
    } = this.props

    if (videoList.length === 1) {
      hidePLR()
    }
    deleteVideo({ id, title })
  }

  onClickShowVideo = () => {
    const {
      id,
      title,
      saveLastVideo: saveVideo,
    } = this.props

    saveVideo({ id, title })
  }

  render() {
    const {
      title,
      id,
      videoList,
      language,
    } = this.props

    return (
      <WatchedItemComponent
        title={title}
        active={id === videoList[0].id}
        onClickShowVideo={this.onClickShowVideo}
        onClickDelete={this.onClickDelete}
        language={language}
      />
    )
  }
}

const mapStateToProps = state => (
  {
    videoList: state.watched.videoList,
    language: state.app.language,
  }
)

const mapDispatchToProps = {
  hidePlayer,
  deleteWatchedVideo,
  saveLastVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchedItem)

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteWatchedVideo, saveLastVideo } from 'store/watchedVideos/actions'
import showPlayer from 'store/pages/main/actions'
import WatchedVideoItemComponent from './Component'

class WatchedVideoItem extends PureComponent {
  state = {}

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deleteWatchedVideo: PropTypes.func.isRequired,
    showPlayer: PropTypes.func.isRequired,
    saveLastVideo: PropTypes.func.isRequired,
  }

  onClickDelete = () => {
    const { id, title, deleteWatchedVideo: deleteVideo } = this.props
    deleteVideo({ id, title })
  }

  onClickShowPlayer = () => {
    const {
      id,
      title,
      showPlayer: showPLR,
      saveLastVideo: saveVideo,
    } = this.props
    showPLR({ id, title })
    saveVideo({ id, title })
  }

  render() {
    const { title } = this.props

    return (
      <WatchedVideoItemComponent
        title={title}
        onClickShowPlayer={this.onClickShowPlayer}
        onClickDelete={this.onClickDelete}
      />
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = {
  showPlayer,
  deleteWatchedVideo,
  saveLastVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchedVideoItem)

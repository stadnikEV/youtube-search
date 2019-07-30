import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { putWatchedVideos } from 'store/watched/actions'
import { showPlayer } from 'store/pages/main/actions'
import WatchedComponent from './Component'


class Watched extends PureComponent {
  state = {}

  static propTypes = {
    videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    putWatchedVideos: PropTypes.func.isRequired,
    showPlayer: PropTypes.func.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    language: null,
  }

  componentDidMount() {
    const { putWatchedVideos: putVideos, showPlayer: showPLR } = this.props

    const videoList = JSON.parse(localStorage.getItem('watchedVideos'))

    if (videoList && videoList.length !== 0) {
      const { id, title } = videoList[0]

      putVideos(videoList)
      showPLR({ id, title })
    }
  }

  componentDidUpdate() {
    const { videoList } = this.props
    localStorage.setItem('watchedVideos', JSON.stringify(videoList))
  }

  render() {
    const { videoList, language } = this.props

    if (videoList.length === 0) {
      return false
    }

    return (
      <WatchedComponent
        videoList={videoList}
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
  putWatchedVideos,
  showPlayer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Watched)

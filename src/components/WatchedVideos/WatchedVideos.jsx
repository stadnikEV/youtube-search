import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { putWatchedVideos } from 'store/watchedVideos/actions'
import showPlayer from 'store/pages/main/actions'
import WatchedVideosComponent from './Component'


class WatchedVideos extends PureComponent {
  state = {}

  static propTypes = {
    videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    putWatchedVideos: PropTypes.func.isRequired,
    showPlayer: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { putWatchedVideos: putVideos, showPlayer: showPLR } = this.props

    const videoList = JSON.parse(localStorage.getItem('watchedVideos'))

    if (videoList.length !== 0) {
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
    const { videoList, lang } = this.props

    return (
      <WatchedVideosComponent
        videoList={videoList}
        lang={lang}
      />
    )
  }
}


const mapStateToProps = state => (
  {
    videoList: state.watchedVideos.videoList,
    lang: state.app.language,
  }
)

const mapDispatchToProps = {
  putWatchedVideos,
  showPlayer,
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchedVideos)

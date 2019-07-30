import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'

import './style.scss'

class Player extends PureComponent {
  static propTypes = {
    clickCapture: PropTypes.bool.isRequired,
    videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    youtubeIframe: PropTypes.bool.isRequired,
  }

  render() {
    const { videoList, clickCapture, youtubeIframe } = this.props

    const opts = {
      height: '720',
      width: '1080',
      playerVars: {
        autoplay: 0,
      },
    }

    return (
      <div className="player">
        {
          youtubeIframe && (
            <YouTube
              className="player__iframe"
              videoId={videoList[0].id}
              opts={opts}
            />
          )
        }
        { clickCapture && <div className="player__click-capture" /> }
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    clickCapture: state.player.clickCapture,
    videoList: state.watched.videoList,
    youtubeIframe: state.player.youtubeIframe,
  }
)


export default connect(mapStateToProps)(Player)

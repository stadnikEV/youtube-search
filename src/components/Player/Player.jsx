import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'


class Player extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    const { id } = this.props

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    }

    return (
      <YouTube
        videoId={id}
        opts={opts}
      />
    )
  }
}

const mapStateToProps = state => (
  {
    id: state.main.player.id,
  }
)

export default connect(mapStateToProps)(Player)

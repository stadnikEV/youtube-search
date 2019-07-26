import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Player from 'components/Player'
import WatchedVideos from 'components/WatchedVideos'

const Main = (props) => {
  const { id } = props

  return (
    <React.Fragment>
      <Header />
      { id && <Player /> }
      <WatchedVideos />
    </React.Fragment>
  )
}

Main.propTypes = {
  id: PropTypes.string,
}

Main.defaultProps = {
  id: null,
}

const mapStateToProps = state => (
  {
    id: state.main.player.id,
  }
)


export default connect(mapStateToProps)(Main)

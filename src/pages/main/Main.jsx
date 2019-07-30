import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Player from 'components/Player'
import Watched from 'components/Watched'

import './style.scss'

const Main = (props) => {
  const { player } = props

  return (
    <div className="main">
      <Header />
      <main className="main__content">
        <div className="main__watched-container">
          <Watched />
        </div>
        <div className="main__player-container">
          { player && <Player /> }
        </div>
      </main>
    </div>
  )
}

Main.propTypes = {
  player: PropTypes.bool.isRequired,
}

const mapStateToProps = state => (
  {
    player: state.main.player,
  }
)


export default connect(mapStateToProps)(Main)

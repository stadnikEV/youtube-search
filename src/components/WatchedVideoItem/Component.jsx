import React from 'react'
import PropTypes from 'prop-types'


const WatchedVideoItemComponent = (props) => {
  const { title, onClickShowPlayer, onClickDelete } = props

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={onClickShowPlayer}
      >
        {title}
      </button>
      <button
        type="button"
        onClick={onClickDelete}
      >
        Remove
      </button>
    </React.Fragment>
  )
}

WatchedVideoItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClickShowPlayer: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default WatchedVideoItemComponent

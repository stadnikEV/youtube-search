import React from 'react'
import PropTypes from 'prop-types'

const YoutubeSearchItemComponent = (props) => {
  const {
    title,
    thumb,
    voites,
    onClickPlay,
  } = props

  return (
    <div className="search-dropdown-item">
      <div className="search-dropdown-item__item">
        <div className="search-dropdown-item__img">
          <img src={thumb} alt={title} />
        </div>
        <div className="search-dropdown-item__title-voites">
          <div className="search-dropdown-item__title">{title}</div>
          <div className="search-dropdown-item__voites">{`voites ${voites}`}</div>
        </div>
      </div>
      <div className="search-dropdown-item__button">
        <button
          type="button"
          onClick={onClickPlay}
        >
          Play
        </button>
      </div>
    </div>
  )
}

YoutubeSearchItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  voites: PropTypes.string.isRequired,
  onClickPlay: PropTypes.func.isRequired,
}

export default YoutubeSearchItemComponent

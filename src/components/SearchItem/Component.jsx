import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'

const YoutubeSearchItemComponent = (props) => {
  const {
    title,
    thumb,
    votes,
    onClickPlay,
    language,
  } = props

  return (
    <IntlProvider
      key={language}
      locale={language}
      messages={messages[language]}
    >
      <div className="search-item">
        <div className="search-item__img-container">
          <img
            className="search-item__img"
            src={thumb}
            alt={title}
          />
        </div>
        <div className="search-item__text-container">
          <div className="search-item__title">
            {title}
          </div>
          <div className="search-item__votes">
            <FormattedMessage id="votes" />
            {`${votes}`}
          </div>
        </div>
        <button
          className="search-item__button"
          type="button"
          onClick={onClickPlay}
        >
          <FormattedMessage id="play" />
        </button>
      </div>
    </IntlProvider>
  )
}

YoutubeSearchItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
  onClickPlay: PropTypes.func.isRequired,
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

YoutubeSearchItemComponent.defaultProps = {
  language: null,
}

export default YoutubeSearchItemComponent

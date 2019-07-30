import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'
import cn from 'classnames'
import messages from './messages'

import './style.scss'


const WatchedItemComponent = (props) => {
  const {
    active,
    title,
    onClickShowVideo,
    onClickDelete,
    language,
  } = props

  return (
    <IntlProvider
      key={language}
      locale={language}
      messages={messages[language]}
    >
      <div className="watched-item">
        <button
          className={cn('watched-item__link', { 'watched-item__link_active': active })}
          type="button"
          onClick={onClickShowVideo}
        >
          {title}
        </button>
        <button
          className="watched-item__remove"
          type="button"
          onClick={onClickDelete}
        >
          <FormattedMessage id="remove" />
        </button>
      </div>
    </IntlProvider>
  )
}

WatchedItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClickShowVideo: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

WatchedItemComponent.defaultProps = {
  language: null,
}

export default WatchedItemComponent

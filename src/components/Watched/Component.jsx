import React from 'react'
import PropTypes from 'prop-types'
import WatchedList from 'components/_lists/WatchedList'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'

import './style.scss'


const WatchedComponent = (props) => {
  const { language } = props

  return (
    <IntlProvider
      key={language}
      locale={language}
      messages={messages[language]}
    >
      <div className="watched">
        <span className="watched__title">
          <FormattedMessage id="title" />
        </span>
        <div className="watched__list-container">
          <WatchedList />
        </div>
      </div>
    </IntlProvider>
  )
}

WatchedComponent.propTypes = {
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

WatchedComponent.defaultProps = {
  language: null,
}

export default WatchedComponent

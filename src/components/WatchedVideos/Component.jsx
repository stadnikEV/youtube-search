import React from 'react'
import PropTypes from 'prop-types'
import WatchedVideoItem from 'components/WatchedVideoItem'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'


const WatchedVideosComponent = (props) => {
  const { videoList, lang } = props

  const list = videoList.map(({ title, id }) => (
    <li key={id}>
      <WatchedVideoItem
        title={title}
        id={id}
      />
    </li>
  ))

  return (
    <IntlProvider key={lang} locale={lang} messages={messages[lang]}>
      <div>
        <span>
          <FormattedMessage id="title" />
        </span>
        <ul>
          {list}
        </ul>
      </div>
    </IntlProvider>
  )
}

WatchedVideosComponent.propTypes = {
  videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  lang: PropTypes.string.isRequired,
}

export default WatchedVideosComponent

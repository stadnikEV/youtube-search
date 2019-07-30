import React from 'react'
import PropTypes from 'prop-types'
import SearchList from 'components/_lists/SearchList'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'

import './style.scss'

const SearchComponent = (props) => {
  const {
    onSubmit,
    onInputChange,
    inputValue,
    searchList,
    language,
  } = props

  return (
    <IntlProvider
      key={language}
      locale={language}
      messages={messages[language]}
    >
      <div className="search">
        <form onSubmit={onSubmit}>
          <input
            className="search__input"
            value={inputValue}
            onChange={onInputChange}
          />
          <FormattedMessage id="search">
            {
              value => (
                <input
                  className="search__submit"
                  type="submit"
                  value={value}
                />
              )
            }
          </FormattedMessage>
        </form>
        <div className="search__dropdown">
          {searchList && <SearchList />}
        </div>
      </div>
    </IntlProvider>
  )
}

SearchComponent.propTypes = {
  searchList: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

SearchComponent.defaultProps = {
  searchList: null,
  language: null,
}

export default SearchComponent

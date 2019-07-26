import React from 'react'
import PropTypes from 'prop-types'
import SearchDropdown from 'components/_dropdown/SearchDropdown'

import './style.scss'

const SearchComponent = (props) => {
  const {
    onSubmit,
    onInputChange,
    inputValue,
    videoList,
  } = props

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      {videoList ? <SearchDropdown /> : false}
    </div>
  )
}

SearchComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  videoList: PropTypes.arrayOf(PropTypes.object),
}

SearchComponent.defaultProps = {
  videoList: null,
}

export default SearchComponent

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchItem from 'components/SearchItem'

import './style.scss'


const SearchList = (props) => {
  const { searchList } = props

  const getSearchlList = () => (
    searchList.map(video => (
      <li key={video.id}>
        <SearchItem video={video} />
      </li>
    ))
  )

  return (
    <div className="search-list">
      <ul>
        {searchList && getSearchlList()}
      </ul>
    </div>
  )
}

SearchList.propTypes = {
  searchList: PropTypes.arrayOf(PropTypes.object),
}

SearchList.defaultProps = {
  searchList: null,
}

const mapStateToProps = state => (
  {
    searchList: state.search.searchList,
  }
)

export default connect(mapStateToProps)(SearchList)

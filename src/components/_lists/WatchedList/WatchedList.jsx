import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WatchedItem from 'components/WatchedItem'

import './style.scss'

const WatchedList = (props) => {
  const { videoList } = props

  const list = videoList.map(({ title, id }) => (
    <li key={id}>
      <WatchedItem
        title={title}
        id={id}
      />
    </li>
  ))

  return (
    <div className="watched-list">
      <ul>
        {list}
      </ul>
    </div>
  )
}

WatchedList.propTypes = {
  videoList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = state => (
  {
    videoList: state.watched.videoList,
  }
)

export default connect(mapStateToProps)(WatchedList)

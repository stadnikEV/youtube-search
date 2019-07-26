import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showSearchDropdown } from 'store/search/actions'
import SearchComponent from './Component'
import searchRequest from './search-request'


class Search extends PureComponent {
  state = {
    inputValue: '',
  }

  static propTypes = {
    videoList: PropTypes.arrayOf(PropTypes.object),
    showSearchDropdown: PropTypes.func.isRequired,
  }

  static defaultProps = {
    videoList: null,
  }

  onInputChange = (e) => {
    const { value } = e.target
    this.setState({
      inputValue: value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { inputValue } = this.state

    searchRequest({ searchString: inputValue })
      .then((videoList) => {
        const { showSearchDropdown: showList } = this.props
        showList(videoList)
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  render() {
    const { inputValue } = this.state
    const { videoList } = this.props

    return (
      <SearchComponent
        inputValue={inputValue}
        videoList={videoList}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
      />
    )
  }
}

const mapStateToProps = state => (
  {
    videoList: state.search.videoList,
  }
)

const mapDispatchToProps = {
  showSearchDropdown,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showSearchList, hideSearchList } from 'store/search/actions'
import {
  setPlayerClickCupture,
  removePlayerClickCupture,
  hideYoutubeIfarame,
  showYoutubeIfarame,
} from 'store/player/actions'
import onClickOutside from 'react-onclickoutside'
import SearchComponent from './Component'
import searchRequest from './search-request'


class Search extends PureComponent {
  state = {
    inputValue: '',
  }

  static propTypes = {
    searchList: PropTypes.arrayOf(PropTypes.object),
    showSearchList: PropTypes.func.isRequired,
    hideSearchList: PropTypes.func.isRequired,
    hideYoutubeIfarame: PropTypes.func.isRequired,
    showYoutubeIfarame: PropTypes.func.isRequired,
    setPlayerClickCupture: PropTypes.func.isRequired,
    removePlayerClickCupture: PropTypes.func.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    searchList: null,
    language: null,
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
      .then((searchList) => {
        const {
          showSearchList: showList,
          setPlayerClickCupture: setClickCupture,
          hideYoutubeIfarame: hideIfarame,
        } = this.props
        if (window.screen.width < 769) {
          hideIfarame()
        }
        showList(searchList)
        setClickCupture()
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  handleClickOutside = () => {
    const {
      hideSearchList: hideList,
      removePlayerClickCupture: removeClickCupture,
      showYoutubeIfarame: showIfarame,
      searchList,
    } = this.props

    if (!searchList) {
      return
    }

    showIfarame()
    removeClickCupture()
    hideList()
  }

  render() {
    const { inputValue } = this.state
    const { searchList, language } = this.props

    return (
      <SearchComponent
        searchList={searchList}
        inputValue={inputValue}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
        language={language}
      />
    )
  }
}

const mapStateToProps = state => (
  {
    searchList: state.search.searchList,
    language: state.app.language,
  }
)

const mapDispatchToProps = {
  showSearchList,
  hideSearchList,
  hideYoutubeIfarame,
  showYoutubeIfarame,
  setPlayerClickCupture,
  removePlayerClickCupture,
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Search))

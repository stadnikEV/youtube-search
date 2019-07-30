import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setLanguage from 'store/app/actions'
import { closeLangList, openLangList } from 'store/changeLang/actions'
import { setPlayerClickCupture, removePlayerClickCupture } from 'store/player/actions'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import ChangeLangComponent from './Component'


class ChangeLang extends PureComponent {
  state = {}

  static propTypes = {
    closeLangList: PropTypes.func.isRequired,
    openLangList: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    setPlayerClickCupture: PropTypes.func.isRequired,
    removePlayerClickCupture: PropTypes.func.isRequired,
  }


  static defaultProps = {
    language: null,
  }

  onOpenDropdown = () => {
    const {
      isOpen,
      openLangList: openList,
      closeLangList: closeList,
      setPlayerClickCupture: setClickCupture,
    } = this.props

    if (isOpen) {
      closeList()
    } else {
      openList()
    }

    setClickCupture()
  }

  handleClickOutside = () => {
    const {
      closeLangList: closeList,
      removePlayerClickCupture: removeClickCupture,
      isOpen,
    } = this.props

    if (!isOpen) {
      return
    }

    closeList()
    removeClickCupture()
  }

  render() {
    const { language, isOpen } = this.props

    return (
      <ChangeLangComponent
        language={language}
        isOpen={isOpen}
        onOpenDropdown={this.onOpenDropdown}
      />
    )
  }
}

const mapStateToProps = state => (
  {
    language: state.app.language,
    isOpen: state.changeLang.isOpen,
  }
)

const mapDispatchToProps = {
  setLanguage,
  closeLangList,
  openLangList,
  setPlayerClickCupture,
  removePlayerClickCupture,
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(ChangeLang))

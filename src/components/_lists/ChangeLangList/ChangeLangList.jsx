import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setLanguage from 'store/app/actions'
import { closeLangList } from 'store/changeLang/actions'
import { removePlayerClickCupture } from 'store/player/actions'
import PropTypes from 'prop-types'
import config from 'app-config'
import ChangeLangListComponent from './Component'


class ChangeLangList extends PureComponent {
  state = {}

  static propTypes = {
    setLanguage: PropTypes.func.isRequired,
    removePlayerClickCupture: PropTypes.func.isRequired,
    closeLangList: PropTypes.func.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    language: null,
  }

  onChangeLang = (e) => {
    const { name: lang } = e.target
    const {
      setLanguage: setLang,
      closeLangList: closeList,
      removePlayerClickCupture: removeClickCupture,
    } = this.props

    localStorage.setItem('language', lang)
    setLang(lang)
    closeList()
    removeClickCupture()
  }

  render() {
    const { language } = this.props
    const { languages } = config

    const sortedLang = [...languages].sort((a) => {
      if (a === language) return -1
      return 1
    })

    return (
      <ChangeLangListComponent
        onClick={this.onChangeLang}
        languages={sortedLang}
      />
    )
  }
}


const mapStateToProps = state => (
  { language: state.app.language }
)

const mapDispatchToProps = {
  setLanguage,
  closeLangList,
  removePlayerClickCupture,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLangList)

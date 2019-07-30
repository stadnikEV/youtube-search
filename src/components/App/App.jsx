import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import setLanguage from 'store/app/actions'
import getLanguage from './get-language'
import AppComponent from './Component'

import './style.scss'


class App extends PureComponent {
  static propTypes = {
    setLanguage: PropTypes.func.isRequired,
    language: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    language: null,
  }

  componentDidMount() {
    const { setLanguage: setLang } = this.props
    setLang(getLanguage())
  }

  render() {
    const { language } = this.props

    if (language === null) {
      return false
    }

    return <AppComponent />
  }
}

const mapStateToProps = state => (
  { language: state.app.language }
)

const mapDispatchToProps = {
  setLanguage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Switch } from 'react-router-dom'
import setLanguage from 'store/app/actions'
import PropTypes from 'prop-types'


class ChooseLanguage extends Component {
  state = {}

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

  onClick= (e) => {
    const { name: lang } = e.target
    const { setLanguage: setLang } = this.props

    setLang(lang)
    localStorage.setItem('language', lang)
  }

  render() {
    const { language } = this.props

    return (
      <div>
        <Switch>
          { language === 'en' && <Redirect to="/" /> }
          { language && <Redirect to={`/${language}`} /> }
        </Switch>

        <button
          type="button"
          name="en"
          onClick={this.onClick}
        >
          EN
        </button>
        <button
          type="button"
          name="ru"
          onClick={this.onClick}
        >
          RU
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { language: state.app.language }
)

const mapDispatchToProps = {
  setLanguage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage)

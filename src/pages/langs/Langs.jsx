import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import setLanguage from 'store/app/actions'
import PropTypes from 'prop-types'
import config from 'app-config'

import './style.scss'

class Langs extends PureComponent {
  state = {}

  static propTypes = {
    setLanguage: PropTypes.func.isRequired,
  }


  onClick = (e) => {
    const { name: lang } = e.target
    const { setLanguage: setLang } = this.props

    localStorage.setItem('language', lang)
    setLang(lang)
  }

  render() {
    const { languages } = config

    const langs = [...languages].map(lang => (
      <div
        key={lang}
        className="langs__link-container"
      >
        <NavLink
          to={lang === 'en' ? '/' : `/${lang}`}
          onClick={this.onClick}
          className="langs__link"
          name={lang}
        >
          {lang.toUpperCase()}
        </NavLink>
      </div>

    ))

    return (
      <div className="langs">
        <nav className="langs__list">
          {langs}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  setLanguage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Langs)

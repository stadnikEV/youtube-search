import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

const ChangeLangListComponent = (props) => {
  const { languages, onClick } = props

  const navlink = (
    languages.map(lang => (
      <div key={lang}>
        <NavLink
          to={lang === 'en' ? '/' : `/${lang}`}
          className="change-lang-list__text"
          onClick={onClick}
          name={lang}
        >
          {lang}
        </NavLink>
      </div>
    ))
  )
  return (
    <nav
      className="change-lang-list"
    >
      {navlink}
    </nav>
  )
}

ChangeLangListComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ChangeLangListComponent

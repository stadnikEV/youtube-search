import React from 'react'
import Search from 'components/Search'
import ChangeLang from 'components/ChangeLang'

import './style.scss'

const Header = () => (
  <header className="header">
    <div className="header__search-container">
      <Search />
    </div>
    <div className="header__lang-container">
      <ChangeLang />
    </div>
  </header>
)

export default Header

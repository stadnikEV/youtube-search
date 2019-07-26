import React from 'react'
import Search from 'components/Search'
import ChooseLanguage from 'components/ChooseLanguage'

import './style.scss'

const Header = () => (
  <header className="header">
    <Search />
    <ChooseLanguage />
  </header>
)

export default Header

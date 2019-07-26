import React from 'react'
import { Route, Switch } from 'react-router-dom'
import regexLangsPath from 'utils/regex-langs-path'
import LanguageRouter from 'pages/LanguageRouter'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import { addLocaleData } from 'react-intl'
import Main from 'pages/main'
import NotFound from 'pages/not-found'


addLocaleData(en)
addLocaleData(ru)

const AppComponent = () => (
  <LanguageRouter>
    <Switch>
      <Route exact path={`:lang(${regexLangsPath}|)/`} component={Main} />
      <Route component={NotFound} />
    </Switch>
  </LanguageRouter>
)

export default AppComponent

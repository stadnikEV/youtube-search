import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import regexLangsPath from 'utils/regex-langs-path'
import LanguageRouter from 'pages/LanguageRouter'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import { addLocaleData } from 'react-intl'

const Main = React.lazy(() => import('pages/main'/* webpackChunkName: 'mainPage' */))
const NotFound = lazy(() => import('pages/not-found'/* webpackChunkName: 'notFoundPage' */))

addLocaleData(en)
addLocaleData(ru)

const AppComponent = () => (
  <LanguageRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path={`:lang(${regexLangsPath}|)/`} component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </LanguageRouter>
)

export default AppComponent

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from 'pages/main'
import NotFound from 'pages/not-found'
import LanguageRouter from 'components/LanguageRouter'
import regexLangsPath from 'utils/regex-langs-path'
import getLanguage from './get-language'


class App extends Component {
  state = {
    language: getLanguage(),
  }

  render() {
    const { language } = this.state

    return (
      <LanguageRouter language={language}>
        <Switch>
          <Route exact path={`:lang(${regexLangsPath}|)/`} component={Main} />
          <Route component={NotFound} />
        </Switch>
      </LanguageRouter>
    )
  }
}

export default App

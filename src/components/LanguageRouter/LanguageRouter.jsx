import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Langs from 'pages/langs'
import regexLangsPath from 'utils/regex-langs-path'


const LanguageRouter = (props) => {
  const { children, language } = props
  const Children = () => children

  return (
    <Switch>
      <Route exact path="/langs" component={Langs} />
      {
        !language && <Redirect to="/langs" />
      }
      <Route path={`:lang(${regexLangsPath})`} render={Children} />
      {
        language === 'en' && <Route render={Children} />
      }
      <Redirect to={`/${language}${window.location.pathname}`} />
    </Switch>
  )
}

LanguageRouter.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
}

LanguageRouter.defaultProps = {
  language: false,
}

export default LanguageRouter

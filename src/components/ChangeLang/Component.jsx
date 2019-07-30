import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ChangeLangList from 'components/_lists/ChangeLangList'

import './style.scss'

const ChangeLangComponent = (props) => {
  const {
    language,
    isOpen,
    onOpenDropdown,
  } = props

  return (
    <div
      className="change-lang"
    >
      <button
        onClick={onOpenDropdown}
        className="change-lang__current"
        type="button"
      >
        {language}
      </button>
      <div
        className={cn('change-lang__dropdown', { 'change-lang__dropdown_open': isOpen })}
      >
        {isOpen && <ChangeLangList />}
      </div>
    </div>
  )
}

ChangeLangComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenDropdown: PropTypes.func.isRequired,
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

ChangeLangComponent.defaultProps = {
  language: null,
}

export default ChangeLangComponent

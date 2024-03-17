import React from 'react'
import PropTypes from 'prop-types'
import 'components/Button/button.scss'

export const Button = ({ color, text, width, onClickButton }) => (
  <button
    className={`button button__${color}`}
    style={{ width: width || 'auto' }}
    onClick={() => onClickButton()}
  >
    <span className="button__text">{text}</span>
  </button>
)

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClickButton: PropTypes.func.isRequired,
}

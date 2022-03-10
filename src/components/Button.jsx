import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

function Button({text, cssClass, link}) {
  return (
    <a href = {link} className = {`btn ${cssClass}`}>{text}</a>
  )
}

Button.defaultProps = {
    link: '#',
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    cssClass: PropTypes.string,
    text: PropTypes.string.isRequired,
}

export default Button
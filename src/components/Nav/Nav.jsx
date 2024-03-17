import React from 'react'
import 'components/Nav/nav.scss'
import { NAVS } from 'consts'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Nav = ({ placement }) => {
  return (
    <nav className={`list header__nav ${placement}`}>
      {Object.values(NAVS).map((nav, idx) => (
        <li key={idx}>
          <NavLink className={`link header__item ${placement}`} to={nav.href}>
            {nav.title.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </nav>
  )
}

Nav.propTypes = {
  placement: PropTypes.string.isRequired,
}

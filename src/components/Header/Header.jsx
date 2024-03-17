import React, { useState } from 'react'
import 'components/Header/header.scss'
import { CONTACTS, NAVS } from 'consts'
import { ReactComponent as IconSearch } from 'assets/icons/loop.svg'
import { ReactComponent as IconReset } from 'assets/icons/reset.svg'
import { ReactComponent as IconHeart } from 'assets/icons/heart.svg'
import { ReactComponent as IconBag } from 'assets/icons/bag.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const [value, setValue] = useState('')
  const [isVisibleValidationMessage, setIsVisibleValidationMessage] = useState(false)
  const [isVisibleButtonReset, setIsVisibleButtonReset] = useState(false)

  const handleChange = ({ target }) => {
    setValue(target.value)
    setIsVisibleValidationMessage(false)

    if (target.value.length > 0) {
      setIsVisibleButtonReset(true)
    } else {
      setIsVisibleButtonReset(false)
    }
  }

  const handleFocus = () => {
    if (value.length > 0) {
      setIsVisibleButtonReset(true)
    }
  }

  const handleClickReset = () => {
    setValue('')
    setIsVisibleButtonReset(false)
  }

  const handleClickSubmit = () => {
    if (value === '') {
      setIsVisibleValidationMessage(true)
    } else {
      console.log('Submit search')
      setValue('')
      setIsVisibleButtonReset(false)
    }
  }

  return (
    <header>
      <div className="header__upper">
        <div className="header__help">
          <a className="link header__link header__link--tel" href={`tel:${CONTACTS.tel}`}>
            {CONTACTS.tel}
          </a>
          <a className="link header__link header__link--help" href="/help">
            Допомога
          </a>
        </div>
        <ul className="list header__signs">
          <li className="header__sign">
            <a className="link header__link header__link--sign" href="/login">
              Увійти
            </a>
          </li>
          <span className="header__link--sign">{'/'}</span>
          <li className="header__sign">
            <a className="link header__link header__link--sign" href="/signup">
              Зареєструватися
            </a>
          </li>
        </ul>
      </div>
      <div className="header__down">
        <a className="link header__logo" href="/">
          {'ignat'.toUpperCase()}
        </a>
        <nav className="list header__nav">
          {Object.values(NAVS).map((nav, idx) => (
            <li key={idx}>
              <NavLink className="link header__item" to={nav.href}>
                {nav.title.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </nav>
        <div className="header__search">
          <label htmlFor="search" className="header__label">
            <input
              className="header__input"
              id="search"
              type="text"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <button
              type="submit"
              className="header__button header__button--submit"
              onClick={handleClickSubmit}
            >
              <IconSearch className="header__icon header__icon--loop" />
            </button>
            {isVisibleButtonReset && (
              <button
                className="header__button header__button--reset"
                type="button"
                onClick={handleClickReset}
              >
                <IconReset className="header__icon header__icon--reset" />
              </button>
            )}
            {isVisibleValidationMessage && (
              <span className="header__validation">Field must be not empty!</span>
            )}
          </label>
          <a className="link header__favorite" href="/products/sort=favorite">
            <IconHeart className="header__icon header__icon--heart" />
          </a>
          <a className="link header__bag" href="/bag">
            <IconBag className="header__icon header__icon--bag" />
          </a>
        </div>
      </div>
    </header>
  )
}

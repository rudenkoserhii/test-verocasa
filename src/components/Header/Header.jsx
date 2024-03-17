import React from 'react'
import 'components/Header/header.scss'
import { CONTACTS } from 'consts'

export const Header = () => (
  <header>
    <div className="header__upper">
      <div className="header__help">
        <a className="link header__link header__link--tel" href={`tel:${CONTACTS.tel}`}>
          {CONTACTS.tel}
        </a>
        <a
          className="link header__link header__link--help"
          href="/help"
          target="_blank"
          rel="noopener"
        >
          Допомога
        </a>
      </div>
      <ul className="list header__signs">
        <li className="header__sign">
          <a
            className="link header__link header__link--sign"
            href="/login"
            target="_blank"
            rel="noopener"
          >
            Увійти
          </a>
        </li>
        <span className="header__link--sign">{'/'}</span>
        <li className="header__sign">
          <a
            className="link header__link header__link--sign"
            href="/signup"
            target="_blank"
            rel="noopener"
          >
            Зареєструватися
          </a>
        </li>
      </ul>
    </div>
    <div className="header__down"></div>
    <p>Header</p>
  </header>
)

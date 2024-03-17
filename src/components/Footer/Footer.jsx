import React from 'react'
import 'components/Footer/footer.scss'
import { CONTACTS, SOCIALS, FOOTER } from 'consts'
import { Nav } from 'components/Nav/Nav'
import { nanoid } from 'nanoid'

export const Footer = () => (
  <footer>
    <div className="footer__upper">
      <div className="footer__leftside">
        <div className="footer__block">
          <h4 className="footer__title">Контакт - центр</h4>
          <ul className="list footer__list">
            {Object.values(CONTACTS).map((contact) => (
              <li key={nanoid()}>
                <a className="link footer__link" href={'/contacts'}>
                  {Object.values(contact)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="list footer__socials">
          {Object.values(SOCIALS).map(({ Icon, href, title }) => (
            <li key={nanoid()}>
              <a className="link footer__link footer__link--social" href={href} title={title}>
                <Icon className="footer__social" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__rightside">
        {FOOTER.map(({ title, menu }) => (
          <div key={nanoid()} className="footer__block">
            <h4 className="footer__title">{title}</h4>
            <ul className="list footer__list">
              {menu.map((item) => (
                <li key={nanoid()}>
                  <a className="link footer__link" href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="footer__down">
      <Nav placement="footer" />
      <div className="footer__privacy">
        <a className="link footer__privacy--insert" href="/privacy">
          © 2022 — 2023 IGNAT. Усі права захищені.
        </a>
      </div>
    </div>
  </footer>
)

import React, { useState } from 'react'
import 'components/Subscription/subscription.scss'
import { ReactComponent as IconReset } from 'assets/icons/reset.svg'
import { Button } from 'components/Button/Button'

export const Subscription = () => {
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
    setIsVisibleValidationMessage(false)
  }

  const handleClickSubmit = () => {
    if (!isValidEmail(value)) {
      setIsVisibleValidationMessage(true)
    } else {
      console.log('Submit search - ', value)
      setValue('')
      setIsVisibleButtonReset(false)
    }
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  return (
    <section className="subscription__section">
      <div className="subscription__content">
        <h3 className="subscription__title">Спіймай всі акції!</h3>
        <p className="subscription__paragraph">
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у
          нашому магазині. А у нас їх багато :D
        </p>
      </div>
      <div className="subscription__sender">
        <label htmlFor="email" className="subscription__label">
          <input
            className="subscription__input"
            id="email"
            type="email"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="введіть"
          />
          {isVisibleButtonReset && (
            <button
              className="subscription__button subscription__button--reset"
              type="button"
              onClick={handleClickReset}
            >
              <IconReset className="subscription__icon subscription__icon--reset" />
            </button>
          )}
          {isVisibleValidationMessage && (
            <span className="subscription__validation">
              Field must be not empty and like email!
            </span>
          )}
        </label>
        <Button color="grey" text="Підписатись" onClickButton={() => handleClickSubmit()} />
      </div>
    </section>
  )
}

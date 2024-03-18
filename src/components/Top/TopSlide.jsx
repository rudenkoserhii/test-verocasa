import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconHeartEmpty } from 'assets/icons/heart.svg'
import { ReactComponent as IconHeartFilled } from 'assets/icons/heart_filled.svg'

export const TopSlide = ({ slide }) => {
  const { art, name, whom, colors, weight, price, isFavorite, images } = slide
  const { x1, x2, x3 } = images[0].medium.photo_01
  const [isFavoriteValue, setIsFavoriteValue] = useState(isFavorite)

  const renderColorsOrWeight = () => {
    if (weight) {
      return `${weight} кг`
    } else {
      const colorsLength = colors.length
      let colorsWord = ''
      if (colorsLength === 1) {
        colorsWord = 'колір'
      } else if (colorsLength >= 2 && colorsLength <= 4) {
        colorsWord = 'кольори'
      } else {
        colorsWord = 'кольорів'
      }
      return `${colorsLength} ${colorsWord}`
    }
  }

  const handleFavoriteClick = (event) => {
    event.stopPropagation()
    setIsFavoriteValue(!isFavoriteValue)
  }

  return (
    <div className="top__wrapper">
      <button className={`top__favorite ${isFavorite}`} onClick={handleFavoriteClick}>
        {isFavoriteValue ? (
          <IconHeartFilled className="top__favorite--icon" />
        ) : (
          <IconHeartEmpty className="top__favorite--icon" />
        )}
      </button>
      <a href={`/products/product/${art}`} className="link">
        <img className="top__image" srcSet={`${x1} 1x, ${x2} 2x, ${x3} 3x`} src={x1} alt="Wear" />
        <div className="top__content">
          <h4 className="top__title">{name.replace(name[0], name[0].toUpperCase())}</h4>
          <p className="top__whom">{whom.replace(whom[0], whom[0].toUpperCase())}</p>
          <p className="top__colors">{renderColorsOrWeight()}</p>
          <p className="top__paragraph">{`${price} грн.`}</p>
        </div>
      </a>
    </div>
  )
}

TopSlide.propTypes = {
  slide: PropTypes.shape({
    art: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    whom: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        small: PropTypes.shape({
          photo_01: PropTypes.shape({
            x1: PropTypes.string,
            x2: PropTypes.string,
            x3: PropTypes.string,
          }),
          photo_02: PropTypes.shape({
            x1: PropTypes.string,
            x2: PropTypes.string,
            x3: PropTypes.string,
          }),
          photo_03: PropTypes.shape({
            x1: PropTypes.string,
            x2: PropTypes.string,
            x3: PropTypes.string,
          }),
        }),
        medium: PropTypes.shape({
          photo_01: PropTypes.shape({
            x1: PropTypes.string,
            x2: PropTypes.string,
            x3: PropTypes.string,
          }),
        }),
        big: PropTypes.shape({
          photo_01: PropTypes.shape({
            x1: PropTypes.string,
            x2: PropTypes.string,
            x3: PropTypes.string,
          }),
        }),
      }),
    ),
  }).isRequired,
}

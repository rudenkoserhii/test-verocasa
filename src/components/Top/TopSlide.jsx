import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconHeart } from 'assets/icons/heart.svg'

export const TopSlide = ({ slide }) => {
  const { name, whom, colors, weight, price, isFavorite, images } = slide
  const { x1, x2, x3 } = images[0].medium.photo_01

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

  return (
    <div className="top__wrapper">
      <button className={`top_favorite ${isFavorite}`}>
        <IconHeart className="top__favorite--icon" />
      </button>
      <img className="top__image" srcSet={`${x1} 1x, ${x2} 2x, ${x3} 3x`} src={x1} alt="Wear" />
      <div className="top__content">
        <h4 className="top__title">{name}</h4>
        <h5 className="top__whom">{whom}</h5>
        <p className="top__colors">{renderColorsOrWeight()}</p>
        <p className="top__paragraph">{`${price} грн.`}</p>
      </div>
    </div>
  )
}

TopSlide.propTypes = {
  slide: PropTypes.shape({
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

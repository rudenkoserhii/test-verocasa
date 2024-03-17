import React from 'react'
import PropTypes from 'prop-types'

export const HeroSlide = ({ slide }) => {
  const { title, subtitle, discount, left, bg_x1, bg_x2, bg_x3 } = slide

  const backgroundImageStyle = {
    backgroundImage: `image-set(url(${bg_x1}) 1x, url(${bg_x2}) 2x, url(${bg_x3}) 3x)`,
  }

  return (
    <div className="hero__wrapper">
      <div className="hero__container" style={backgroundImageStyle}>
        <div className="hero__content">
          <div className="hero__leftside">
            <h1 className="hero__title">{title}</h1>
            <h2 className="hero__subtitle">{subtitle}</h2>
          </div>
          <div className="hero__rightside">
            <h3 className="hero__discount">{discount}</h3>
            <p className="hero__paragraph">{left}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroSlide.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    bg_x1: PropTypes.string.isRequired,
    bg_x2: PropTypes.string.isRequired,
    bg_x3: PropTypes.string.isRequired,
  }).isRequired,
}

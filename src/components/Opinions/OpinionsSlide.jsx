import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as StarEmpty } from 'assets/icons/star_empty.svg'
import { ReactComponent as StarFilled } from 'assets/icons/star_filled.svg'
import { nanoid } from 'nanoid'

export const OpinionsSlide = ({ slide }) => {
  const { name, content, avatar_x1, avatar_x2, avatar_x3, stars } = slide

  const filledStars = Array.from({ length: stars }, (_, index) => index)
  const emptyStars = Array.from({ length: 5 - stars }, (_, index) => index)

  return (
    <div className="opinions__wrapper">
      <div className="opinions__info">
        <img
          className="opinions__image"
          srcSet={`${avatar_x1} 1x, ${avatar_x2} 2x, ${avatar_x3} 3x`}
          src={avatar_x1}
          alt="Wear"
        />
        <div className="opinions__content">
          <div className="opinions__stars">
            {filledStars.length > 0 &&
              filledStars.map(() => <StarFilled key={nanoid()} className="opinions__star" />)}{' '}
            {emptyStars.length > 0 &&
              emptyStars.map(() => <StarEmpty key={nanoid()} className="opinions__star" />)}
          </div>
          <h5 className="opinions__title">{name}</h5>
        </div>
      </div>
      <p className="opinions__text">{content}</p>
    </div>
  )
}

OpinionsSlide.propTypes = {
  slide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar_x1: PropTypes.string.isRequired,
    avatar_x2: PropTypes.string.isRequired,
    avatar_x3: PropTypes.string.isRequired,
    content: PropTypes.string,
    stars: PropTypes.number.isRequired,
  }).isRequired,
}

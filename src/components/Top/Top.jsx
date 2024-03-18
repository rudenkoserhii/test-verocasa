import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'components/Top/top.scss'
import { MOCK_PRODUCTS } from 'consts'
import { nanoid } from 'nanoid'
import { TopSlide } from 'components/Top/TopSlide'
import { ReactComponent as Left } from 'assets/icons/arrow_left_top.svg'
import { ReactComponent as Right } from 'assets/icons/arrow_right_top.svg'

const FIRST_PAGE = 1

export const Top = () => {
  const [currentPage, seCurrentPage] = useState(FIRST_PAGE)

  return (
    <section className="section top__section">
      <div className="top__head">
        <h3 className="top__title">Найгарячіші товари</h3>
        <p className="top__counting">
          <span className="top__counting--current">{currentPage.toString().padStart(2, '0')}</span>
          <span className="top__counting--symbol">{'/'}</span>
          <span className="top__counting--all">
            {(currentPage + 2).toString().padStart(2, '0')}
          </span>
        </p>
        <button className="top__swiper-button-prev">
          <Left />
        </button>
        <button className="top__swiper-button-next">
          <Right />
        </button>
      </div>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '.top__swiper-button-next',
          prevEl: '.top__swiper-button-prev',
        }}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        className="top__swiper"
        onSlideChange={(swiper) => {
          seCurrentPage(swiper.activeIndex + 1)
        }}
      >
        {MOCK_PRODUCTS.map((slide) => (
          <SwiperSlide key={nanoid()}>
            <TopSlide slide={slide} seCurrentPage={(value) => seCurrentPage(value)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

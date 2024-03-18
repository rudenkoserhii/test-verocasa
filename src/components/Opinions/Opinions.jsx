import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'components/Opinions/opinions.scss'
import { MOCK_OPINIONS } from 'consts'
import { nanoid } from 'nanoid'
import { OpinionsSlide } from 'components/Opinions/OpinionsSlide'
import { ReactComponent as Left } from 'assets/icons/arrow_left_top.svg'
import { ReactComponent as Right } from 'assets/icons/arrow_right_top.svg'

const FIRST_PAGE = 1

export const Opinions = () => {
  const [currentPage, seCurrentPage] = useState(FIRST_PAGE)

  return (
    <section className="section opinions__section">
      <div className="opinions__head">
        <h3 className="opinions__title">Відгуги наших клієнтів</h3>
        <p className="opinions__counting">
          <span className="opinions__counting--current">
            {currentPage.toString().padStart(2, '0')}
          </span>
          <span className="opinions__counting--symbol">{'/'}</span>
          <span className="opinions__counting--all">
            {(currentPage + 3).toString().padStart(2, '0')}
          </span>
        </p>
        <button className="opinions__swiper-button-prev">
          <Left />
        </button>
        <button className="opinions__swiper-button-next">
          <Right />
        </button>
      </div>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '.opinions__swiper-button-next',
          prevEl: '.opinions__swiper-button-prev',
        }}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        className="opinions__swiper"
        onSlideChange={(swiper) => {
          seCurrentPage(swiper.activeIndex + 1)
        }}
      >
        {MOCK_OPINIONS.map((slide) => (
          <SwiperSlide key={nanoid()}>
            <OpinionsSlide slide={slide} seCurrentPage={(value) => seCurrentPage(value)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

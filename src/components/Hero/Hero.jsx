import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'components/Hero/hero.scss'
import { MOCK_HERO } from 'consts'
import { nanoid } from 'nanoid'
import { HeroSlide } from 'components/Hero/HeroSlide'
import { ReactComponent as Left } from 'assets/icons/arrow_left_slider.svg'
import { ReactComponent as Right } from 'assets/icons/arrow_right_slider.svg'

export const Hero = () => (
  <section className="section hero__section">
    <Swiper
      cssMode={true}
      navigation={{
        nextEl: '.hero__swiper-button-next',
        prevEl: '.hero__swiper-button-prev',
      }}
      pagination={{
        el: '.hero__pagination',
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="hero__swiper"
    >
      <button className="hero__swiper-button-prev">
        <Left />
      </button>
      <button className="hero__swiper-button-next">
        <Right />
      </button>
      <div className="hero__pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span className="swiper-pagination-bullet"></span>
        <span className="swiper-pagination-bullet"></span>
        <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
      </div>
      {MOCK_HERO.map((slide) => (
        <SwiperSlide key={nanoid()}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

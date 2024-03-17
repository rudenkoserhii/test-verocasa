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

export const Hero = () => (
  <section>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="hero__swiper"
    >
      {MOCK_HERO.map((slide) => (
        <SwiperSlide key={nanoid()}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'components/Hero/hero.scss'
import { MOCK_PRODUCTS } from 'consts'
import { nanoid } from 'nanoid'
import { TopSlide } from 'components/Top/TopSlide'

export const Top = () => {
  return (
    <section>
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="top__swiper"
      >
        {MOCK_PRODUCTS.map((slide) => (
          <SwiperSlide key={nanoid()}>
            <TopSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

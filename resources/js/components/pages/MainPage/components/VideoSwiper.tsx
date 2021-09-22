/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './VideoSwiper.scss'

SwiperCore.use([Navigation])

const VideoSwiper = () => {
  return (
    <div className={s.container}>
      <Swiper
        slidesPerView={1}
        className={s.swiper_container}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
      >
        <SwiperSlide>
          <div className={s.video_item}>
            <video
              className={s.img}
              preload="auto"
              autoPlay
              loop
              muted
              poster="/videos/promo_main_poster.jpg"
            >
              <source
                src="/videos/promo_main.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
            <img src="/images/video1.png" alt="" className={s.img} />
            {/* <img src="/images/icons/play_icon.svg" className={s.play_icon} alt="" /> */}
            <div className={s.shadow} />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className={s.video_item}>
            <img src="/images/video2.png" alt="" className={s.img} />
            <img src="/images/icons/play_icon.svg" className={s.play_icon} alt="" />
            <div className={s.shadow} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.video_item}>
            <img src="/images/video1.png" alt="" className={s.img} />
            <img src="/images/icons/play_icon.svg" className={s.play_icon} alt="" />
            <div className={s.shadow} />
          </div>
        </SwiperSlide>
        <div className={`button-next ${s.button_next}`} slot="container-end">
          <img src="/images/icons/next_white_arrow.svg" alt="next" />
        </div>
        <div className={`button-prev ${s.button_prev}`} slot="container-end">
          <img src="/images/icons/next_white_arrow.svg" alt="prev" />
        </div> */}
      </Swiper>
    </div>
  )
}

export default VideoSwiper

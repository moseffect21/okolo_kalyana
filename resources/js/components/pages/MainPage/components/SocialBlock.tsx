/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import s from './SocialBlock.scss'

const SocialBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.social_icons}>
        <a href="https://www.instagram.com/okolo_kalyana/" className={`${s.social_item} ${s.inst}`}>
          <img src="/images/icons/inst.svg" alt="" />
        </a>
        <a href="https://vk.com/blog_hookah" className={`${s.social_item} ${s.vk}`}>
          <img src="/images/icons/vk.svg" alt="" />
        </a>
        <a href="https://t.me/okolokalyana" className={`${s.social_item} ${s.tg}`}>
          <img src="/images/icons/telegram.svg" alt="" />
        </a>
        <a
          href="https://www.youtube.com/c/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%9D%D0%BE%D1%81%D0%B0%D1%87%D0%B5%D0%B2"
          className={`${s.social_item} ${s.youtube}`}
        >
          <img src="/images/icons/youtube2.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default SocialBlock

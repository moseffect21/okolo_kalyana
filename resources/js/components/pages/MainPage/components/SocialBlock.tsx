/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import s from './SocialBlock.scss'

const SocialBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.social_icons}>
        <a href="#" className={`${s.social_item} ${s.inst}`}>
          <img src="/images/icons/inst.svg" alt="" />
        </a>
        <a href="#" className={`${s.social_item} ${s.vk}`}>
          <img src="/images/icons/vk.svg" alt="" />
        </a>
        <a href="#" className={`${s.social_item} ${s.tg}`}>
          <img src="/images/icons/telegram.svg" alt="" />
        </a>
        <a href="#" className={`${s.social_item} ${s.youtube}`}>
          <img src="/images/icons/youtube2.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default SocialBlock

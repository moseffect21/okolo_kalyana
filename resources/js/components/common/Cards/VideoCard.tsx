import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './VideoCard.scss'

type Props = {
  item: any
  type?: 'long' | 'short'
}

const VideoCard = ({ item, type }: Props) => {
  return (
    <NavLink
      to="/blog/video/1"
      className={`${s.card} ${type === 'long' ? s.long : ''} ${type === 'short' ? s.short : ''}`}
    >
      <img src={item.photo} alt="" className={s.back_img} />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.anim}>
        <div className={s.title}>{item.name}</div>
        <div className={s.description}>{item.description}</div>
      </div>
      <div className={s.time_block}>
        <img src="/images/icons/play_button.svg" alt="" />
        <div className={s.time}>{item.time}</div>
      </div>
    </NavLink>
  )
}

export default VideoCard

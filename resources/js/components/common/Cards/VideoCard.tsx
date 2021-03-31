import React from 'react'

import s from './VideoCard.scss'

type Props = {
  item: any
  type?: 'long' | 'short'
}

const VideoCard = ({ item, type }: Props) => {
  return (
    <div
      className={`${s.card} ${type === 'long' ? s.long : ''} ${type === 'short' ? s.short : ''}`}
    >
      <img src={item.photo} alt="" className={s.back_img} />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.title}>{item.name}</div>
      <div className={s.description}>{item.description}</div>
      <div className={s.time_block}>
        <img src="/images/icons/play_button.svg" alt="" />
        <div className={s.time}>{item.time}</div>
      </div>
    </div>
  )
}

export default VideoCard

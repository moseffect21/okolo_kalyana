import React from 'react'

import s from './ArticleCard.scss'

type Props = {
  item: any
  type?: 'long' | 'short' | 'high'
}
const ArticleCard = ({ item, type }: Props) => {
  return (
    <div
      className={`${s.card} ${type === 'long' ? s.long : ''} ${type === 'short' ? s.short : ''} ${
        type === 'high' ? s.high : ''
      }`}
    >
      <img src={item.photo} alt="" className={s.back_img} />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.title}>{item.name}</div>
      <div className={s.description}>Не повторять дома</div>
      <div className={s.info}>
        <div className={s.date}>10 августа 2018</div>
        <div className={s.author}>Автор: Артём Егоров</div>
      </div>
    </div>
  )
}

export default ArticleCard

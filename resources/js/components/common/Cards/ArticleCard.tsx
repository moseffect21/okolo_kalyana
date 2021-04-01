import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './ArticleCard.scss'

type Props = {
  item: any
  type?: 'long' | 'short' | 'high'
}
const ArticleCard = ({ item, type }: Props) => {
  return (
    <NavLink
      to="/blog/article/1"
      className={`${s.card} ${type === 'long' ? s.long : ''} ${type === 'short' ? s.short : ''} ${
        type === 'high' ? s.high : ''
      }`}
    >
      <img src={item.photo} alt="" className={s.back_img} />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.anim}>
        <div className={s.title}>{item.name}</div>
        <div className={s.description}>Не повторять дома</div>
      </div>
      <div className={s.info}>
        <div className={s.date}>10 августа 2018</div>
        <div className={s.author}>Автор: Артём Егоров</div>
      </div>
    </NavLink>
  )
}

export default ArticleCard

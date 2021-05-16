import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './ArticleCard.scss'

type Props = {
  item: any
  type?: 'long' | 'short' | 'high'
  categSlug: string
}
const ArticleCard = ({ item, type, categSlug }: Props) => {
  return (
    <NavLink
      to={`/blog/${categSlug}/${item.id}`}
      className={`${s.card} ${type === 'long' ? s.long : ''} ${type === 'short' ? s.short : ''} ${
        type === 'high' ? s.high : ''
      }`}
    >
      <img src={item.preview_img} alt="" className={s.back_img} />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.anim}>
        <div className={s.title}>{item.title}</div>
        <div className={s.description}>{item.preview_text}</div>
      </div>
      <div className={s.info}>
        <div className={s.date}>10 августа 2018</div>
        <div className={s.author}>Автор: Артём Егоров</div>
      </div>
    </NavLink>
  )
}

export default ArticleCard

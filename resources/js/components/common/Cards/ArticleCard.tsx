import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

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
      <img src={`/storage/${item.preview_img}`} alt="" className={s.back_img} />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.anim}>
        <div className={s.title}>{item.title}</div>
        <div className={s.description}>{item.preview_text}</div>
      </div>
      <div className={s.info}>
        <div className={s.date}>{moment(item.created_at).format('DD MMMM YYYY')}</div>
        {item.authors && item.authors.length ? (
          <div className={s.author}>Автор: {item.authors[0].name}</div>
        ) : (
          <></>
        )}
      </div>
    </NavLink>
  )
}

export default ArticleCard

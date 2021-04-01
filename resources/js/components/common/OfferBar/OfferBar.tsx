import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './OfferBar.scss'

type Props = {
  data: any
}

const OfferBar = ({ data }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Смотрите также:</div>
      <div className={s.items_container}>
        {data.map((item: any) => {
          return (
            <NavLink to={`/blog/${item.categ_slug}/${item.id}`} className={s.item}>
              <img src={item.photo} alt="" className={s.back_img} />
              <div className={s.gradient} />
              <div className={s.text_block}>
                <div className={s.name}>{item.title}</div>
                <div className={s.trigger}>
                  <img src="/images/icons/arrow_down.svg" alt="" />
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default OfferBar
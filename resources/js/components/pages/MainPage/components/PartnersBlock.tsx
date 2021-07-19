import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import s from './PartnersBlock.scss'

const partnersMap = [
  {
    id: 1,
    image: '/images/krass.png',
  },
  {
    id: 2,
    image: '/images/krass.png',
  },
  {
    id: 3,
    image: '/images/krass.png',
  },
  {
    id: 4,
    image: '/images/krass.png',
  },
  {
    id: 5,
    image: '/images/krass.png',
  },
  {
    id: 6,
    image: '/images/krass.png',
  },
  {
    id: 7,
    image: '/images/krass.png',
  },
  {
    id: 8,
    image: '/images/krass.png',
  },
]

type Props = {
  data: any
}

const PartnersBlock = ({ data }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.back_text}>Партнеры</div>
        <div className={s.article_container}>
          <div className={s.partner_container}>
            {data.map((item: any, i: number) => {
              return (
                <NavLink className={s.item} to={`/partners/${item.id}`}>
                  <img src={`/storage/${item.photo}`} alt="" />
                </NavLink>
              )
            })}
            {/* <div className={s.link_container}>
              <NavLink to="/blog/video" className={s.show_all}>
                <span>Смотреть все</span> <img src="/images/icons/black_right_arrow.svg" alt="" />{' '}
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersBlock

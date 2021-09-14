import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './PartnersBlock.scss'

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
            {data.map((item: any) => {
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

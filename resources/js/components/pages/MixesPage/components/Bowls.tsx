/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

import s from './Bowls.module.scss'

type Props = {
  data: Array<unknown>
  onItemClick: Function
}

const Bowls = ({ data, onItemClick }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className={s.container}>
      {data
        ? data.map((item: any) => {
            return (
              <div
                key={`bowl_${item.id}`}
                className={`${s.item} ${hovered ? s.hovered : ''}`}
                onMouseEnter={() => {
                  setHovered(true)
                }}
                onMouseLeave={() => {
                  setHovered(false)
                }}
                onClick={() => onItemClick(item.id, 'bowl')}
              >
                <div className={s.img_block}>
                  <img src={`/storage/${item.photo}`} alt="" />
                </div>
                <div className={s.gradient} />
                <div className={s.item_name}>{item.name}</div>
                <div className={s.shadow} />
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default React.memo(Bowls)

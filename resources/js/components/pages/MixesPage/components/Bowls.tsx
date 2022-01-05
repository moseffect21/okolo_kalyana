/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'

import s from './Bowls.module.scss'

type Props = {
  data: Array<unknown>
  onItemClick: Function
  bowl_id: number
}

const Bowls = ({ data, onItemClick, bowl_id }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hasSelected, setHasSelected] = useState<boolean>(false)
  useEffect(() => {
    if (bowl_id) {
      setHasSelected(true)
    } else {
      setHasSelected(false)
    }
  }, [bowl_id])
  return (
    <div className={s.container}>
      {data
        ? data.map((item: any) => {
            return (
              <div
                key={`bowl_${item.id}`}
                className={`${s.item} ${hovered || hasSelected ? s.hovered : ''} ${
                  item.id === bowl_id ? s.selected : ''
                }`}
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

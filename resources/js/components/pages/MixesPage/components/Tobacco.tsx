/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'

import s from './Tobacco.module.scss'

type Props = {
  data: Array<unknown>
  onItemClick: Function
  tobacco_id: number
}

const Tobacco = ({ data, onItemClick, tobacco_id }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hasSelected, setHasSelected] = useState<boolean>(false)
  useEffect(() => {
    if (tobacco_id) {
      setHasSelected(true)
    } else {
      setHasSelected(false)
    }
  }, [tobacco_id])
  return (
    <div className={s.container}>
      {data
        ? data.map((item: any) => {
            return (
              <div
                key={`tobacco_${item.id}`}
                className={`${s.item} ${hovered || hasSelected ? s.hovered : ''} ${
                  item.id === tobacco_id ? s.selected : ''
                }`}
                onMouseEnter={() => {
                  setHovered(true)
                }}
                onMouseLeave={() => {
                  setHovered(false)
                }}
                onClick={() => onItemClick(item.id, 'tobacco')}
              >
                {item.name}
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default React.memo(Tobacco)

import React from 'react'
import { NavLink } from 'react-router-dom'

import AboutModal from './AboutModal'
import s from './AboutPage.scss'

type Props = {
  item: any
  hovered: boolean
  setHovered: Function
}
const AboutCard = ({ item, hovered, setHovered }: Props) => {
  return (
    <>
      <div className={s.card_container}>
        <NavLink
          to={`/about/${item.id}`}
          className={`${s.card_item} ${hovered ? s.hovered : ''}`}
          onMouseEnter={() => {
            setHovered(true)
          }}
          onMouseLeave={() => {
            setHovered(false)
          }}
        >
          <img src={`/storage/${item.photo}`} alt="" />
          <div className={s.gradient} />
          <div className={s.name}>{item.name}</div>
          <div className={s.desc}>{item.desc}</div>
          <div className={s.shadow} />
        </NavLink>
      </div>
      <AboutModal item={item} />
    </>
  )
}

export default AboutCard

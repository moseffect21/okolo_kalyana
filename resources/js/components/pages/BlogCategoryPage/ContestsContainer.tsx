import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import s from './ContestsContainer.scss'

const ContestsItem = ({ item, hovered, setHovered }: any) => {
  return (
    <NavLink
      to={`/blog/contests/${item.id}`}
      className={`${s.item} ${hovered ? s.hovered : ''}`}
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
    >
      <div className={s.photo}>
        <img src={`/storage/${item.preview_img}`} alt="" />
        <div className={s.shadow} />
      </div>
      <div className={s.name}>{item.title}</div>
    </NavLink>
  )
}

type Props = {
  data: any
}

const ContestsContainer = ({ data }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const articles = data && data.articles ? data.articles : []
  return (
    <div className={s.container}>
      {articles && articles.length ? (
        articles.map((item: any) => {
          return <ContestsItem item={item} hovered={hovered} setHovered={setHovered} />
        })
      ) : (
        <></>
      )}
    </div>
  )
}

export default ContestsContainer

import React from 'react'

import s from './InfoBlock.scss'

const InfoBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img src="/images/logo_black.svg" alt="" className={s.img} />
        <div className={s.txt}>
          Коммьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в
          целую культуру, которая намного шире и богаче, чем просто «попускать дымок»
        </div>
      </div>
    </div>
  )
}

export default InfoBlock

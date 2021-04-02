import React from 'react'

import s from './FirstBlock.scss'

const FirstBlock = () => {
  return (
    <div className={s.container}>
      <img src="/images/main_background.jpg" alt="" className={s.back_img} />
      <div className={s.shadow} />
      <div className={s.gradient} />
      <img src="/images/logo.svg" alt="" className={s.logo} />
    </div>
  )
}

export default FirstBlock

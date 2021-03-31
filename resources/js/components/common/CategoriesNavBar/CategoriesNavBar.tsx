import React from 'react'

import s from './CategoriesNavBar.scss'

const CategoriesNavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <div className={s.row}>
          <img src="/images/icons/youtube.svg" alt="" className={s.icon} />
          <span className={s.text}>Видео</span>
          <img src="/images/icons/arrow_down.svg" alt="" className={s.trigger} />
        </div>
      </div>
      <div className={s.item}>
        <div className={s.row}>
          <img src="/images/icons/doc.svg" alt="" className={s.icon} />
          <span className={s.text}>Статьи</span>
          <img src="/images/icons/arrow_down.svg" alt="" className={s.trigger} />
        </div>
      </div>
      <div className={s.item}>
        <div className={s.row}>
          <img src="/images/icons/speaker.svg" alt="" className={s.icon} />
          <span className={s.text}>Новости</span>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.row}>
          <img src="/images/icons/trophy.svg" alt="" className={s.icon} />
          <span className={s.text}>Конкурсы</span>
        </div>
      </div>
    </div>
  )
}

export default CategoriesNavBar

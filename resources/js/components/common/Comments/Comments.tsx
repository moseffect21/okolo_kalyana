/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import s from './Comments.scss'

const Comments = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>Комментарии (10)</div>
      <div className={s.input_block}>
        <label className={s.comment_input}>
          <img src="/images/video1.png" alt="" className={s.user_img} />
          <input type="text" placeholder="Введите комментарий..." />
        </label>
      </div>

      <div className={s.comments_items}>
        <div className={s.item}>
          <div className={s.top_block}>
            <img src="/images/video1.png" alt="" className={s.user_img} />
            <span className={s.nickname}>moseffect21</span>
          </div>
          <div className={s.text}>
            Соглы ну и флэкс. Курю писоску эверидей, ща как выиграю че нибудь и буду курить в два
            раза ольше, уууууееееееСоглы ну и флэкс. Курю писоску эверидей, ща как выиграю че нибудь
            и буду курить в два раза ольше, уууууееееееСоглы ну и флэкс. Курю писоску эверидей, ща
            как выиграю че нибудь и буду курить в два раза ольше, уууууееееее
          </div>
        </div>
        <div className={s.item}>
          <div className={s.top_block}>
            <img src="/images/video2.png" alt="" className={s.user_img} />
            <span className={s.nickname}>vlad</span>
          </div>
          <div className={s.text}>
            Соглы ну и флэкс. Курю писоску эверидей, ща как выиграю че нибудь и буду курить в два
            раза ольше, уууууееееее
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments

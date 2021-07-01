import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './PartnerItemPage.scss'

type Props = {
  data: any
}

const ArticleItem = ({ item }: any) => {
  return (
    <NavLink className={s.video_item} to={`/blog/articles/${item.id}`}>
      <div className={s.video_img}>
        <img src={item.preview_img} alt="" />
        <div className={s.shadow} />
      </div>
      <div className={s.video_name}>{item.title}</div>
    </NavLink>
  )
}

const ArticlesBlock = ({ data }: Props) => {
  return (
    <div className={s.horizontal_container}>
      <div className={s.title}>Статьи</div>
      <div className={s.horizontal_cont}>
        {data ? (
          data.map((item: any) => {
            return <ArticleItem item={item} />
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default ArticlesBlock

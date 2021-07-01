import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './PartnerItemPage.scss'

const VideoItem = ({ item }: any) => {
  return (
    <NavLink className={s.video_item} to={`/blog/videos/${item.id}`}>
      <div className={s.video_img}>
        <img src={item.preview_img} alt="" />
        <div className={s.shadow} />
      </div>
      <div className={s.video_name}>{item.title}</div>
    </NavLink>
  )
}

type Props = {
  data: any
}

const VideosBlock = ({ data }: Props) => {
  return (
    <div className={s.horizontal_container}>
      <div className={s.title}>Видео</div>
      <div className={s.horizontal_cont}>
        {data ? (
          data.map((item: any) => {
            return <VideoItem item={item} />
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default VideosBlock

/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
import React from 'react'
import { VideoCard } from 'components/common/Cards'
import { SortVideo } from 'components/common/Sorting'

import s from './VideoContainer.scss'

type Props = {
  data: any
}
const VideoContainer = ({ data }: Props) => {
  const videoArr = SortVideo(data.articles ? data.articles : [])
  return (
    <div className={s.video_container}>
      {videoArr.map((item: any, i: number) => {
        return (
          <div className={`${s.row} ${i % 2 === 1 ? s.reverse : ''}`}>
            <div className={`${s.column} ${s.long}`}>
              {item[0] && <VideoCard item={item[0]} type="long" categSlug={data.slug} />}
            </div>
            <div className={`${s.column} ${s.short}`}>
              {item[1] && item[1][0] && (
                <VideoCard item={item[1][0]} type="short" categSlug={data.slug} />
              )}
              {item[1] && item[1][1] && (
                <VideoCard item={item[1][1]} type="short" categSlug={data.slug} />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VideoContainer

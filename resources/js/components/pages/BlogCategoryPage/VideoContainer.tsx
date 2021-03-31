/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
import React from 'react'
import { VideoCard } from 'components/common/Cards'

import s from './VideoContainer.scss'

const sortVideo = (videoArr: any) => {
  const newArr: any = []
  let c = 0

  videoArr.map((item: any, i: number) => {
    if (i === 0 || i % 3 === 0) {
      newArr[c] = []
      newArr[c][0] = item
    } else if (i === 1 || i % 4 === 0) {
      newArr[c][1] = []
      newArr[c][1][0] = item
    } else if (newArr[c][1] && newArr[c][1].length === 1) {
      newArr[c][1][1] = item
      c++
    }
  })
  return newArr
}

type Props = {
  data: any
}
const VideoContainer = ({ data }: Props) => {
  const videoArr = sortVideo(data)
  return (
    <div className={s.video_container}>
      {videoArr.map((item: any, i: number) => {
        return (
          <div className={`${s.row} ${i % 2 === 1 ? s.reverse : ''}`}>
            <div className={`${s.column} ${s.long}`}>
              {item[0] && <VideoCard item={item[0]} type="long" />}
            </div>
            <div className={`${s.column} ${s.short}`}>
              {item[1] && item[1][0] && <VideoCard item={item[1][0]} type="short" />}
              {item[1] && item[1][1] && <VideoCard item={item[1][1]} type="short" />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VideoContainer

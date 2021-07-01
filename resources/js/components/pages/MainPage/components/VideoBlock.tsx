import { ArticleCard, VideoCard } from 'components/common/Cards'
import { SortArticles } from 'components/common/Sorting'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from 'components/app/IsMobile'

import s from './VideoBlock.scss'

type Props = {
  data: any
}

const VideoBlock = ({ data }: Props) => {
  const isMobile = useContext(Context)
  const articles = SortArticles(data)
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.back_text}>Видео</div>
        {isMobile ? (
          <div className={s.article_container}>
            {data.map((item, i: number) => {
              return i < 3 ? <ArticleCard item={item} type="long" categSlug="video" /> : <></>
            })}
          </div>
        ) : (
          <div className={s.article_container}>
            {articles.map((item: any, i: number) => {
              if (i === 0) {
                return (
                  <div className={`${s.row_container}`} key="asd">
                    <div className={s.row}>
                      <div className={`${s.column} ${s.long}`}>
                        <div className={s.sub_row}>
                          {item[0] && <ArticleCard item={item[0]} type="long" categSlug="video" />}
                        </div>
                        <div className={s.sub_row}>
                          {item[1] && <ArticleCard item={item[1]} type="short" categSlug="video" />}
                          {item[2] && <ArticleCard item={item[2]} type="short" categSlug="video" />}
                        </div>
                      </div>
                      <div className={`${s.column} ${s.short}`}>
                        <div className={s.short_row}>
                          {item[3] && <ArticleCard item={item[3]} type="long" categSlug="video" />}
                        </div>
                        <div className={s.link_container}>
                          <NavLink to="/blog/video" className={s.show_all}>
                            <span>Смотреть все</span>{' '}
                            <img src="/images/icons/next_white_arrow.svg" alt="" />{' '}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return ''
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoBlock

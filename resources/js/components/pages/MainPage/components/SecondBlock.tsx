import React from 'react'
import { videoMap } from 'components/pages/BlogCategoryPage/VideoData'
import { SortArticles } from 'components/common/Sorting'
import { ArticleCard } from 'components/common/Cards'
import { NavLink } from 'react-router-dom'

import s from './SecondBlock.scss'

const SecondBlock = () => {
  const articles = SortArticles(videoMap)
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.back_text}>Статьи</div>
        <div className={s.article_container}>
          {articles.map((item: any, i: number) => {
            if (i === 0) {
              return (
                <div className={`${s.row_container}`}>
                  <div className={s.row}>
                    <div className={`${s.column} ${s.long}`}>
                      <div className={s.sub_row}>
                        {item[0] && <ArticleCard item={item[0]} type="long" />}
                      </div>
                      <div className={s.sub_row}>
                        {item[1] && <ArticleCard item={item[1]} type="short" />}
                        {item[2] && <ArticleCard item={item[2]} type="short" />}
                      </div>
                    </div>
                    <div className={`${s.column} ${s.short}`}>
                      <div className={s.short_row}>
                        {item[3] && <ArticleCard item={item[3]} type="long" />}
                      </div>
                      <div className={s.link_container}>
                        <NavLink to="/blog/article" className={s.show_all}>
                          <span>Смотреть все</span>{' '}
                          <img src="/images/icons/black_right_arrow.svg" alt="" />{' '}
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
      </div>
    </div>
  )
}

export default SecondBlock

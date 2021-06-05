/* eslint-disable no-plusplus */
import { ArticleCard } from 'components/common/Cards'
import React, { useContext } from 'react'
import { SortArticles } from 'components/common/Sorting'
import { Context } from 'components/app/IsMobile'

import s from './ArticleContainer.scss'
import { videoMap } from './VideoData'

type Props = {
  data: any
}

const ArticleContainer = ({ data }: Props) => {
  const isMobile = useContext(Context)
  // const articles = SortArticles(data.articles)
  const articles = videoMap
  return isMobile ? (
    <div className={s.article_container}>
      {articles.map((item) => {
        return <ArticleCard item={item} categSlug={data.slug} type="short" />
      })}
    </div>
  ) : (
    <div className={s.article_container}>
      {articles.map((item: any, i: number) => {
        const isReverse = i % 2 === 1
        return (
          <div className={`${s.row_container} ${isReverse ? s.reverse : ''}`}>
            <div className={s.row}>
              <div className={`${s.column} ${s.long}`}>
                <div className={s.sub_row}>
                  {!isReverse
                    ? item[0] && <ArticleCard item={item[0]} type="long" categSlug={data.slug} />
                    : item[3] && <ArticleCard item={item[3]} type="long" categSlug={data.slug} />}
                </div>
                <div className={s.sub_row}>
                  {item[1] && <ArticleCard item={item[1]} type="short" categSlug={data.slug} />}
                  {item[2] && <ArticleCard item={item[2]} type="short" categSlug={data.slug} />}
                </div>
              </div>
              <div className={`${s.column} ${s.short}`}>
                {!isReverse
                  ? item[3] && <ArticleCard item={item[3]} type="high" categSlug={data.slug} />
                  : item[0] && <ArticleCard item={item[0]} type="high" categSlug={data.slug} />}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleContainer

/* eslint-disable no-plusplus */
import { ArticleCard } from 'components/common/Cards'
import React from 'react'
import { SortArticles } from 'components/common/Sorting'

import s from './ArticleContainer.scss'

type Props = {
  data: any
}

const ArticleContainer = ({ data }: Props) => {
  const articles = SortArticles(data.articles)
  return (
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

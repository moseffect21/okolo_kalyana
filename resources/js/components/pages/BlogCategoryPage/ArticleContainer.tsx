/* eslint-disable no-plusplus */
import { ArticleCard } from 'components/common/Cards'
import React from 'react'

import s from './ArticleContainer.scss'

type Props = {
  data: any
}

const sortArticles = (arr: any) => {
  const newArr: any = []
  let c = 0
  const j = 0

  arr.map((item: any, i: number) => {
    if (!newArr[c]) newArr[c] = []
    newArr[c].push(item)
    if (i !== 0 && (i + 1) % 4 === 0) {
      c++
    }
  })
  return newArr
}

const ArticleContainer = ({ data }: Props) => {
  const articles = sortArticles(data)
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
                    ? item[0] && <ArticleCard item={item[0]} type="long" />
                    : item[3] && <ArticleCard item={item[3]} type="long" />}
                </div>
                <div className={s.sub_row}>
                  {item[1] && <ArticleCard item={item[1]} type="short" />}
                  {item[2] && <ArticleCard item={item[2]} type="short" />}
                </div>
              </div>
              <div className={`${s.column} ${s.short}`}>
                {!isReverse
                  ? item[3] && <ArticleCard item={item[3]} type="high" />
                  : item[0] && <ArticleCard item={item[0]} type="high" />}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleContainer

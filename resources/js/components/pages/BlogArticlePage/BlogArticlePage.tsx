/* eslint-disable no-nested-ternary */
import { Context } from 'components/app/IsMobile'
import { MetaTitle } from 'components/app/MetaTags'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import OfferBar from 'components/common/OfferBar'
import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'

import ArticleContent from './ArticleContent'
import useArticle from './useArticle'

const offerData = [
  {
    id: 1,
    title: `“Не повторять дома”, что то может взорваться`,
    photo: '/images/video1.png',
    categ_slug: 'article',
  },
  {
    id: 2,
    title: `“Не повторять дома”, что то может взорваться`,
    photo: '/images/video2.png',
    categ_slug: 'video',
  },
  {
    id: 3,
    title: `“Не повторять дома”, что то может взорваться`,
    photo: '/images/video3.png',
    categ_slug: 'video',
  },
]

const BlogArticlePage = () => {
  const { params } = useRouteMatch<{ slug?: string; id?: string }>()
  const isMobile = useContext(Context)
  const isVideo = params.slug === 'video'
  const isArticle = params.slug === 'article'
  const isContests = params.slug === 'contests'
  const { data, isLoading } = useArticle(params.id ? params.id : '')
  return (
    <>
      <MetaTitle>{data && data.article ? data.article.title : 'Статья'}</MetaTitle>
      {isMobile ? (
        <ArticleContent
          isLoading={isLoading}
          article={data ? data.article : []}
          offer={data ? data.random : []}
        />
      ) : (
        <ContentLayout cols={3} title={isVideo ? 'Видео' : isArticle ? 'Статьи' : 'Блог'}>
          <CategoriesNavBar />
          <ArticleContent
            isLoading={isLoading}
            article={data ? data.article : []}
            offer={data ? data.random : []}
          />
          <OfferBar data={data ? data.random : []} />
        </ContentLayout>
      )}
    </>
  )
}

export default BlogArticlePage

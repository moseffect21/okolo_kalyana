/* eslint-disable no-nested-ternary */
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import OfferBar from 'components/common/OfferBar'
import React from 'react'
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
  const isVideo = params.slug === 'video'
  const isArticle = params.slug === 'article'
  const { data, isLoading } = useArticle(params.id ? params.id : '')
  return (
    <ContentLayout cols={3} title={isVideo ? 'Видео' : isArticle ? 'Статьи' : 'Блог'}>
      <CategoriesNavBar />
      <ArticleContent isLoading={isLoading} article={data ? data.data : []} />
      <OfferBar data={offerData} />
    </ContentLayout>
  )
}

export default BlogArticlePage

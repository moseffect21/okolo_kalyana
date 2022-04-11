/* eslint-disable no-nested-ternary */
import { Context } from 'components/app/IsMobile'
import { MetaDescription, MetaKeywords, MetaTitle } from 'components/app/MetaTags'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import OfferBar from 'components/common/OfferBar'
import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'

import ArticleContent from './ArticleContent'
import useArticle from './useArticle'

const BlogArticlePage = () => {
  const { params } = useRouteMatch<{ slug?: string; id?: string }>()
  const isMobile = useContext(Context)
  const isVideo = params.slug === 'video'
  const isArticle = params.slug === 'article'
  // const isContests = params.slug === 'contests'
  const { data, isLoading } = useArticle(params.id ? params.id : '')
  return (
    <>
      <MetaTitle>{data && data.article ? data.article.seo_title : 'Статья'}</MetaTitle>
      <MetaDescription>{data && data.article ? data.article.seo_description : ''}</MetaDescription>
      <MetaKeywords>{data && data.article ? data.article.seo_keywords : ''}</MetaKeywords>
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

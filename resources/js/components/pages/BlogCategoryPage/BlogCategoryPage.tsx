/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import React from 'react'
import ContentLayout from 'components/common/ContentLayout'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import { useRouteMatch } from 'react-router'

import { videoMap } from './VideoData'
import VideoContainer from './VideoContainer'
import ArticleContainer from './ArticleContainer'

const BlogCategoryPage = () => {
  const { params } = useRouteMatch<{ slug?: string }>()
  const isVideo = params.slug === 'video'
  const isArticle = params.slug === 'article'
  return (
    <ContentLayout cols={2} title={isVideo ? 'Видео' : isArticle ? 'Статьи' : 'Блог'}>
      <CategoriesNavBar />
      <div>
        {isVideo && <VideoContainer data={videoMap} />}
        {isArticle && <ArticleContainer data={videoMap} />}
      </div>
    </ContentLayout>
  )
}

export default BlogCategoryPage

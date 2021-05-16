/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import React from 'react'
import ContentLayout from 'components/common/ContentLayout'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import { useRouteMatch } from 'react-router-dom'
import Loader from 'components/common/Loader'

import { videoMap } from './VideoData'
import VideoContainer from './VideoContainer'
import ArticleContainer from './ArticleContainer'
import useCategory from './useCategory'

const BlogCategoryPage = () => {
  const { params } = useRouteMatch<{ slug?: string }>()
  const { data, isLoading } = useCategory(params.slug ? params.slug : '')
  const categData = data ? data.data : []
  const isVideo = params.slug === 'video'
  const isArticle = params.slug === 'articles'
  return (
    <ContentLayout cols={2} title={categData && categData.name ? categData.name : 'Блог'}>
      <CategoriesNavBar />
      <div>
        {isLoading || !categData ? (
          <Loader />
        ) : (
          <>
            {isVideo && <VideoContainer data={categData} />}
            {isArticle && <ArticleContainer data={categData} />}
          </>
        )}
      </div>
    </ContentLayout>
  )
}

export default BlogCategoryPage

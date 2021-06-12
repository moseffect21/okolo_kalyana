/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import React, { useContext } from 'react'
import ContentLayout from 'components/common/ContentLayout'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import { useRouteMatch } from 'react-router-dom'
import Loader from 'components/common/Loader'
import { Context } from 'components/app/IsMobile'

import { videoMap } from './VideoData'
import VideoContainer from './VideoContainer'
import ArticleContainer from './ArticleContainer'
import useCategory from './useCategory'
import ContestsContainer from './ContestsContainer'

const BlogCategoryPage = () => {
  const { params } = useRouteMatch<{ slug?: string }>()
  const isMobile = useContext(Context)
  const { data, isLoading } = useCategory(params.slug ? params.slug : '')
  const categData = data ? data.data : []
  const isVideo = params.slug === 'video'
  const isArticle = params.slug === 'articles'
  const isContests = params.slug === 'contests'
  return (
    <ContentLayout
      cols={isMobile ? 1 : 2}
      title={categData && categData.name ? categData.name : 'Блог'}
    >
      {!isMobile && <CategoriesNavBar />}
      <div>
        {isLoading || !categData ? (
          <Loader />
        ) : (
          <>
            {isVideo && <VideoContainer data={categData} />}
            {isArticle && <ArticleContainer data={categData} />}
            {isContests && <ContestsContainer data={categData} />}
          </>
        )}
      </div>
    </ContentLayout>
  )
}

export default BlogCategoryPage

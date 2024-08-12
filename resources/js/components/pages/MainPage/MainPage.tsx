import apiClient from 'apiClient'
import { Context } from 'components/app/IsMobile'
import { MetaDescriptionMain, MetaKeywordsMain, MetaTitleMain } from 'components/app/MetaTags'
import Loader from 'components/common/Loader'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

import AboutBlock from './components/AboutBlock'
import FirstBlock from './components/FirstBlock'
// import FourthBlock from './components/FourthBlock'
import InfoBlock from './components/InfoBlock'
import PartnersBlock from './components/PartnersBlock'
// import ProductsBlock from './components/ProductsBlock'
import SecondBlock from './components/SecondBlock'
import SocialBlock from './components/SocialBlock'
// import VideoBlock from './components/VideoBlock'
import VideoSwiper from './components/VideoSwiper'
import s from './MainPage.scss'

const fetchMain = async () => {
  const { data } = await apiClient.get('/api/v1/main')

  return data
}

const MainPage = () => {
  const isMobile = useContext(Context)

  const { data, isLoading } = useQuery('main', fetchMain)

  return (
    <>
      <div className={s.container}>
        <MetaTitleMain />
        <MetaDescriptionMain />
        <MetaKeywordsMain />
        <FirstBlock />
        <SocialBlock />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SecondBlock data={data.articles} />
            {!isMobile && <VideoSwiper />}
            <div className={s.block_with_background}>
              <div className={s.background_img}>
                <div className={s.shadow} />
              </div>
              {/* <VideoBlock data={data.videos} /> */}
              <AboutBlock data={data.team} />
              {!isMobile && (
                <>
                  {/* <ProductsBlock /> */}
                  <InfoBlock />
                </>
              )}
            </div>
            <PartnersBlock data={data.partners} />
            {/* <AboutBlock data={data.team} /> */}
          </>
        )}
      </div>
    </>
  )
}

export default MainPage

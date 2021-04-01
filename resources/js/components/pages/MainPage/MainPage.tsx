import React from 'react'

import FirstBlock from './components/FirstBlock'
import FourthBlock from './components/FourthBlock'
import InfoBlock from './components/InfoBlock'
import PartnersBlock from './components/PartnersBlock'
import ProductsBlock from './components/ProductsBlock'
import SecondBlock from './components/SecondBlock'
import SocialBlock from './components/SocialBlock'
import VideoBlock from './components/VideoBlock'
import VideoSwiper from './components/VideoSwiper'
import s from './MainPage.scss'

const MainPage = () => {
  return (
    <>
      <div className={s.container}>
        <FirstBlock />
        <SocialBlock />
        <SecondBlock />
        <VideoSwiper />
        <div className={s.block_with_background}>
          <div className={s.background_img}>
            <div className={s.shadow} />
          </div>
          <VideoBlock />
          <ProductsBlock />
          <InfoBlock />
        </div>
        <PartnersBlock />
      </div>
    </>
  )
}

export default MainPage

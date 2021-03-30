import React from 'react'
import { MetaTitleMain, MetaDescriptionMain, MetaKeywordsMain } from 'components/app/MetaTags'

const MainPage = () => {
  return (
    <>
      <MetaTitleMain />
      <MetaDescriptionMain />
      <MetaKeywordsMain />
      Главная
      {/* {isMobile ? (
        <MainPageMobile dispatch={dispatch} user={user} />
      ) : (
        <MainPageDesktop dispatch={dispatch} user={user} />
      )} */}
    </>
  )
}

export default MainPage

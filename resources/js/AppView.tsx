import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from 'components/pages/MainPage'
import Header from 'components/common/Header'
import MainLayout from 'components/common/MainLayout'
import AboutPage from 'components/pages/AboutPage'
import BlogCategoryPage from 'components/pages/BlogCategoryPage'
import BlogArticlePage from 'components/pages/BlogArticlePage'
import AgeNotify from 'components/common/modalWindows/AgeNotify'
import PartnersPage from 'components/pages/PartnersPage'
import PartnerItemPage from 'components/pages/PartnerItemPage'
import moment from 'moment'

const AppView = () => {
  useEffect(() => {
    moment.locale('ru')
  }, [])
  return (
    <div className="app-container">
      <MainLayout>
        <Route path="/:pathname1?/:pathname2?">
          <Header />
        </Route>

        <div className="main-container">
          <Switch>
            {/* <Route path="/:slug/:key" component={OtherProfileKey} />
            <Route exact path="/:slug" component={OtherProfile} /> */}
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/blog" exact>
              <Redirect to="/blog/video" />
            </Route>
            <Route path="/partners" exact>
              <PartnersPage />
            </Route>
            <Route path="/partners/:id" exact>
              <PartnerItemPage />
            </Route>
            <Route path="/blog/:slug" exact>
              <BlogCategoryPage />
            </Route>
            <Route path="/blog/:slug/:id/:comments(comments)?" exact>
              <BlogArticlePage />
            </Route>
            <Route path="/about/:id?" exact>
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </MainLayout>
      <AgeNotify />
    </div>
  )
}

export default AppView

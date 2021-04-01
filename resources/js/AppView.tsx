import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from 'components/pages/MainPage'
import Header from 'components/common/Header'
import MainLayout from 'components/common/MainLayout'
import AboutPage from 'components/pages/AboutPage'
import BlogCategoryPage from 'components/pages/BlogCategoryPage'
import BlogArticlePage from 'components/pages/BlogArticlePage'

const AppView = () => {
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
            <Route path="/blog/:slug" exact>
              <BlogCategoryPage />
            </Route>
            <Route path="/blog/:slug/:id" exact>
              <BlogArticlePage />
            </Route>
            <Route path="/about/:id?" exact>
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </MainLayout>
    </div>
  )
}

export default AppView

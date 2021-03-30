import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from 'components/pages/MainPage'
import Header from 'components/common/Header'

const AppView = () => {
  return (
    <div className="app-container">
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
        </Switch>
      </div>
    </div>
  )
}

export default AppView

import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
// import { Context } from 'components/app/IsMobile'
import { useSelector } from 'react-redux'
import { RootState } from 'ReduxStore/rootReducer'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  // const isMobile = React.useContext(Context)
  const isAuth = !!useSelector((state: RootState) => state.userReducer.user!)

  return <Route {...rest} render={() => (isAuth ? children : <Redirect to="/" />)} />
}

export default PrivateRoute

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import queryClient from 'apiClient/queryClient'
import * as IsMobile from 'components/app/IsMobile'
import { HeadProvider } from 'react-head'
import createStore from 'ReduxStore/rootReducer'

import AppView from './AppView'

const App = () => {
  const store = createStore(
    window.auth_user
      ? {
          userReducer: {
            user: window.auth_user,
          },
        }
      : undefined,
  )

  // for localhost
  // const store = createStore({
  //   userReducer: {
  //     user: {
  //       auth: true,
  //       id: 1,
  //       name: 'Ebu Denisku',
  //       avatar: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
  //       nickname: 'EbirTerrorist',
  //       about: 'GovnoCoder',
  //     },
  //   },
  // })

  return (
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Provider store={store}>
            <IsMobile.Provider>
              <AppView />
            </IsMobile.Provider>
          </Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </HeadProvider>
  )
}

export default App

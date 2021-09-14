/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import queryClient from 'apiClient/queryClient'
import * as IsMobile from 'components/app/IsMobile'
import { HeadProvider } from 'react-head'
import createStore from 'ReduxStore/rootReducer'
import { Provider as HistoryProvider } from 'components/app/HistoryContext'
import ScrollRestoration from 'components/app/ScrollRestoration'

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

  return (
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <HistoryProvider>
            <ScrollRestoration />
            <Provider store={store}>
              <IsMobile.Provider>
                <AppView />
              </IsMobile.Provider>
            </Provider>
          </HistoryProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HeadProvider>
  )
}

export default App

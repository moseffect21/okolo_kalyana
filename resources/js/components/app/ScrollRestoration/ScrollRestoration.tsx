import React, { useEffect, memo, useRef } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

export const DefaultKey = 'init-enter'

type Props = {
  visitedUrl: Map<string, number>
}

export const scrollTo = (scrollnumber = 0): number =>
  window.requestAnimationFrame(() => {
    window.scrollTo(0, scrollnumber)
  })

export const getScrollPage = (): number => {
  let docScrollTop = 0
  if (document.documentElement && document.documentElement !== null) {
    docScrollTop = document.documentElement.scrollTop
  }
  return window.pageYOffset || docScrollTop
}

const ScrollRestoration = ({ history, visitedUrl }: RouteComponentProps & Props) => {
  useEffect(() => {
    const handlePopStateChange = () => {
      const { location } = history
      const { key } = location
      const existingRecord = visitedUrl.get(key || DefaultKey)

      if (existingRecord !== undefined) {
        scrollTo(existingRecord)
      }
    }

    window.addEventListener('popstate', handlePopStateChange)
    return () => {
      window.removeEventListener('popstate', handlePopStateChange)
    }
  }, [history, visitedUrl])

  return null
}

const ScrollRestorationMemo = withRouter(
  memo(ScrollRestoration, (prevProps, nextProps) => {
    const { location: prevLoaction, visitedUrl, history } = prevProps
    const { location: nextLoaction } = nextProps

    const key = prevLoaction.key || DefaultKey

    const locationChanged =
      (nextLoaction.pathname !== prevLoaction.pathname ||
        nextLoaction.search !== prevLoaction.search) &&
      nextLoaction.hash === ''

    const scroll = getScrollPage()

    if (locationChanged) {
      if (history.action !== 'POP') {
        scrollTo(0)
        visitedUrl.set(key, scroll)
      } else {
        visitedUrl.set(key, scroll)
      }
    }

    return false
  }),
)

const ScrollRestorationWrapper = () => {
  const visitedUrl = useRef(new Map())

  return <ScrollRestorationMemo visitedUrl={visitedUrl.current} />
}

export default ScrollRestorationWrapper

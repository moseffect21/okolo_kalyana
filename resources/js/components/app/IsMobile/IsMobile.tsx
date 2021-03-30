import React from 'react'
import useResizeObserver from '@react-hook/resize-observer'

export type IsMobileContext = boolean
export const Context = React.createContext<IsMobileContext>(false)

const MOBILE_BREAKPOINT = 768 // px
const checkWidthIsMobile = (width: number) => width <= MOBILE_BREAKPOINT

type Props = {
  children: React.ReactNode
}

export const Provider = ({ children }: Props): React.ReactElement => {
  const target = React.useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = React.useState<IsMobileContext>(
    checkWidthIsMobile(window.screen.width),
  )

  React.useLayoutEffect(() => {
    if (target.current) {
      setIsMobile(checkWidthIsMobile(target.current.getBoundingClientRect().width))
    }
  }, [target])

  useResizeObserver(target, (entry) => setIsMobile(checkWidthIsMobile(entry.contentRect.width)))

  return (
    <Context.Provider value={isMobile}>
      <div ref={target}>{children}</div>
    </Context.Provider>
  )
}

export const { Consumer } = Context

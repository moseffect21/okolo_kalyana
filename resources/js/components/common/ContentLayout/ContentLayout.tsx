import React from 'react'

import s from './ContentLayout.scss'

type Props = {
  children?: React.ReactNode
  cols?: 2 | 3
}

const ContentLayout = ({ children, cols }: Props): React.ReactElement => {
  return (
    <section className={`${s.content_layout} ${cols}` && cols === 3 ? s.three : s.two}>
      {children}
    </section>
  )
}

export default ContentLayout

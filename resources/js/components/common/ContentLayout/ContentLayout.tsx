import React from 'react'

import s from './ContentLayout.scss'

type Props = {
  children?: React.ReactNode
  cols?: 2 | 3
  className?: string
  title?: string
}

const ContentLayout = ({ children, cols, className, title }: Props): React.ReactElement => {
  return (
    <section className={`${s.content_layout} ${className || ''}`}>
      {title && <div className={s.headline}>{title}</div>}
      <div className={`${s.cols_container} ${cols && cols === 3 ? s.three : s.two}`}>
        {children}
      </div>
    </section>
  )
}

export default ContentLayout

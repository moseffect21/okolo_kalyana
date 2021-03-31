import React from 'react'

import s from './MainLayout.scss'

type Props = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props): React.ReactElement => {
  return (
    <section className={s.layout}>
      <div className={s.background_block}>
        <img src="/images/main_background.jpg" alt="" />
        <div className={s.shadow} />
        <div className={s.gradient} />
      </div>
      {children}
    </section>
  )
}

export default MainLayout

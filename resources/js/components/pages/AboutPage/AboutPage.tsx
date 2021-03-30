import ContentLayout from 'components/common/ContentLayout'
import React from 'react'

import s from './AboutPage.scss'

const AboutPage = () => {
  return (
    <div className={s.content_container}>
      <div className={s.headline}>О нас</div>
      <ContentLayout cols={2} />
    </div>
  )
}

export default AboutPage

import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import React from 'react'

import s from './AboutPage.scss'

const AboutPage = () => {
  return (
    <ContentLayout cols={2} title="О нас">
      <CategoriesNavBar />
      <div className={s.container}>
        <div className={s.info}>
          Команда энтузиастов, которая хочет помочь сделать для вас кальянный мир проще, понятней и
          доступней. Наша цель — не пичкать вас сухими текстами, а создать атмосферу общения с
          друзьями на кухне за хорошим кальяном.
        </div>
        <div className={s.title}>Наша команда:</div>
        <div className={s.cards}>
          <div className={s.card_container}>
            <div className={s.card_item}>
              <img src="/images/vlad.png" alt="" />
              <div className={s.name}>Влад</div>
              <div className={s.desc}>Ведущий канала и просто хороший человек</div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}

export default AboutPage

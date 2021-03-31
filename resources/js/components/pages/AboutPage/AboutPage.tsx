import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import React from 'react'

import s from './AboutPage.scss'

const teamMap = [
  {
    name: 'Влад',
    desc: 'Ведущий канала и просто хороший человек',
    photo: '/images/team/vlad.png',
  },
  {
    name: 'Женя',
    desc: 'Контентмейкер, автор статей',
    photo: '/images/team/jenya.png',
  },
  {
    name: 'Настя',
    desc: 'Будущий монтажер видосов',
    photo: '/images/team/nastya.png',
  },
  {
    name: 'Влад',
    desc: 'Ведущий канала и просто хороший человек',
    photo: '/images/team/vlad.png',
  },
  {
    name: 'Женя',
    desc: 'Контентмейкер, автор статей',
    photo: '/images/team/jenya.png',
  },
  {
    name: 'Настя',
    desc: 'Будущий монтажер видосов',
    photo: '/images/team/nastya.png',
  },
]

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
          {teamMap.map((item: any) => {
            return (
              <div className={s.card_container}>
                <div className={s.card_item}>
                  <img src={item.photo} alt="" />
                  <div className={s.gradient} />
                  <div className={s.name}>{item.name}</div>
                  <div className={s.desc}>{item.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ContentLayout>
  )
}

export default AboutPage

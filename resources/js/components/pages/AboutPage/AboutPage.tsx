import apiClient from 'apiClient'
import { MetaDescriptionAbout, MetaKeywordsAbout, MetaTitleAbout } from 'components/app/MetaTags'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import Loader from 'components/common/Loader'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

import AboutCard from './AboutCard'
import s from './AboutPage.scss'

const teamMap = [
  {
    id: 1,
    name: 'Влад',
    desc: 'Ведущий канала и просто хороший человек',
    photo: '/images/team/vlad.png',
    full_desc: `Привет, бро и сестро.. братюня, сеструня.. 😐 эх, русский язык несовершенен..) В общем, привет тому, кто это читает! 🙂
    Так сложилось, что за время ведения видеоблога я регулярно в сообщениях отвечаю на ваши вопросы, и порой на одни и те же по несколько раз в день))
    
    А что касается прямых эфиров, то вопросы по типу «Что лучше: Мамун или палка?» или «Какой кальян взять до 5к?» — их вообще в рамку можно ставить.
    
    Мое основное направление — это видео-контент, а записать ответы на все вопросы в формате видео не всегда представляется возможным, именно поэтому я давно хотел создать ресурс, в котором я смог бы аккумулировать все самое полезное в кальянном мире, используя как свой опыт, так и знания других мастеров кальянных дел)
    Как бы не развивались соцсети, ни одна не сможет заменить полноценный сайт с его удобной эргономикой и возможностью все подогнать под свои нужды. Именно поэтому меня давно не покидала мысль создать ресурс по типу того, который вы сейчас видите перед собой. Затащить такое информационное пространство — задачка не из легких, и дело не только во времени, но и в знаниях) Я что-то понимаю в видеографии, и постараюсь создать для вас красивый визуал в виде видеороликов на сайте, а также «вкусных» фотографий) Ну, и, само собой, я буду автором множества статей. Как вы понимаете, только на этом далеко не уедешь, именно поэтому в ближайшее время на этой странице вы познакомитесь с основной командой проекта околокальяна.рф. Вы можете связаться со мной лично, написав в VK или Инстаграм.`,
  },
  {
    id: 2,
    name: 'Женя',
    desc: 'Контентмейкер, автор статей',
    photo: '/images/team/jenya.png',
    full_desc: 'Ведущий канала и просто хороший человек',
  },
  {
    id: 3,
    name: 'Настя',
    desc: 'Будущий монтажер видосов',
    photo: '/images/team/nastya.png',
    full_desc: 'Ведущий канала и просто хороший человек',
  },
  {
    id: 4,
    name: 'Влад',
    desc: 'Ведущий канала и просто хороший человек',
    photo: '/images/team/vlad.png',
    full_desc: 'Ведущий канала и просто хороший человек',
  },
  {
    id: 5,
    name: 'Женя',
    desc: 'Контентмейкер, автор статей',
    photo: '/images/team/jenya.png',
    full_desc: 'Ведущий канала и просто хороший человек',
  },
  {
    id: 6,
    name: 'Настя',
    desc: 'Будущий монтажер видосов',
    photo: '/images/team/nastya.png',
    full_desc: 'Ведущий канала и просто хороший человек',
  },
]

const fetchTeam = async () => {
  const { data } = await apiClient.get('/api/v1/team')
  return data
}

const AboutPage = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const { data, isLoading } = useQuery('team', fetchTeam)
  return (
    <ContentLayout cols={1}>
      <MetaTitleAbout />
      <MetaDescriptionAbout />
      <MetaKeywordsAbout />
      {/* <CategoriesNavBar /> */}
      <div className={s.container}>
        <div className={s.info}>
          Команда энтузиастов, которая хочет помочь сделать для вас кальянный мир проще, понятней и
          доступней. Наша цель — не пичкать вас сухими текстами, а создать атмосферу общения с
          друзьями на кухне за хорошим кальяном.
        </div>
        {/* <div className={s.title}>Наша команда:</div> */}
        {isLoading ? (
          <Loader />
        ) : (
          <div className={s.cards}>
            {data.map((item: any) => {
              return (
                <AboutCard key={item.id} item={item} hovered={hovered} setHovered={setHovered} />
              )
            })}
          </div>
        )}
      </div>
    </ContentLayout>
  )
}

export default AboutPage

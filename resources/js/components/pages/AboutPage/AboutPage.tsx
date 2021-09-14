import apiClient from 'apiClient'
import { MetaDescriptionAbout, MetaKeywordsAbout, MetaTitleAbout } from 'components/app/MetaTags'
import CategoriesNavBar from 'components/common/CategoriesNavBar'
import ContentLayout from 'components/common/ContentLayout'
import Loader from 'components/common/Loader'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

import AboutCard from './AboutCard'
import s from './AboutPage.scss'

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

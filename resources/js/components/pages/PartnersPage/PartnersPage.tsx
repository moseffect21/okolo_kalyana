import apiClient from 'apiClient'
import {
  MetaDescriptionPartners,
  MetaKeywordsPartners,
  MetaTitlePartners,
} from 'components/app/MetaTags'
import ContentLayout from 'components/common/ContentLayout'
import Loader from 'components/common/Loader'
import React from 'react'
import { useQuery } from 'react-query'
import { NavLink } from 'react-router-dom'

import s from './PartnersPage.scss'

const fetchPartners = async () => {
  const { data } = await apiClient.get('/api/v1/partners')
  return data
}

const PartnerItem = ({ item }: any) => {
  return (
    <NavLink to={`/partners/${item.id}`} className={s.card}>
      <img src={`/storage/${item.photo}`} alt="" />
      {/* <div className={s.name}>{item.name}</div> */}
    </NavLink>
  )
}

const PartnersPage = () => {
  const { isLoading, data } = useQuery('partners', fetchPartners)
  return (
    <ContentLayout cols={1}>
      <MetaTitlePartners />
      <MetaDescriptionPartners />
      <MetaKeywordsPartners />
      <div className={s.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={s.cards}>
            {data && data.length ? data.map((item: any) => <PartnerItem item={item} />) : <></>}
          </div>
        )}
      </div>
    </ContentLayout>
  )
}

export default PartnersPage

/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
import apiClient from 'apiClient'
import { Context } from 'components/app/IsMobile'
import ContentLayout from 'components/common/ContentLayout'
import Loader from 'components/common/Loader'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useRouteMatch } from 'react-router-dom'

import ArticlesBlock from './ArticlesBlock'
import s from './PartnerItemPage.scss'
import VideosBlock from './VideosBlock'

const fetchPartner = async (id: string) => {
  const { data } = await apiClient.get(`/api/v1/partners/${id}`)
  return data
}

const PartnerItemPage = () => {
  const { params } = useRouteMatch<{ id?: string }>()
  const isMobile = useContext(Context)
  const partner_id = params && params.id ? params.id : 0
  const { data, isLoading } = useQuery(['partner', partner_id], () => fetchPartner(partner_id), {
    enabled: partner_id !== 0,
  })
  return (
    <div className={s.container}>
      {isLoading ? (
        <Loader />
      ) : isMobile ? (
        <div className={s.mobile_content}>
          <div className={s.img_block}>
            <img src={data.photo} alt="" />
          </div>
          <div className={s.inner_content}>
            <div className={s.title}>{data.name}</div>
            <div className={s.text}>{data.description}</div>
          </div>
          <ArticlesBlock data={data.articles} />
          <VideosBlock data={data.videos} />
        </div>
      ) : (
        <div className={s.cards} />
      )}
    </div>
  )
}

export default PartnerItemPage

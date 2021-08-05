/* eslint-disable react/no-danger */
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
            <img src={`/storage/${data.photo}`} alt="" />
          </div>
          <div className={s.inner_content}>
            <div className={s.title}>{data.name}</div>
            <div className={s.text} dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
          {data.articles && data.articles.length ? <ArticlesBlock data={data.articles} /> : <></>}
          {data.videos && data.videos.length ? <VideosBlock data={data.videos} /> : <></>}
        </div>
      ) : (
        <div className={s.desc_container}>
          <div className={s.img_block}>
            <img src={`/storage/${data.photo}`} alt="" />
          </div>
          {/* <div className={s.partner_title}>{data.name}</div> */}
          <div className={s.text} dangerouslySetInnerHTML={{ __html: data.description }} />
          {data.articles && data.articles.length ? <ArticlesBlock data={data.articles} /> : <></>}
          {data.videos && data.videos.length ? <VideosBlock data={data.videos} /> : <></>}
        </div>
      )}
    </div>
  )
}

export default PartnerItemPage

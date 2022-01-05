/* eslint-disable @typescript-eslint/naming-convention */
import Loader from 'components/common/Loader'
import React, { useCallback, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { MixesMW } from 'components/common/modalWindows'
import { MetaDescriptionMixes, MetaKeywordsMixes, MetaTitleMixes } from 'components/app/MetaTags'

import s from './MixesPage.module.scss'
import Bowls from './components/Bowls'
import Tobacco from './components/Tobacco'
import { useVariants } from './useMixes'

const MixesPage = () => {
  const { search } = useLocation()
  const history = useHistory()

  const bowl_id = useMemo(() => {
    const params = new URLSearchParams(search)
    const id = params.get('bowl_id')
    return id ? parseInt(id, 10) : 0
  }, [search])

  const tobacco_id = useMemo(() => {
    const params = new URLSearchParams(search)
    const id = params.get('tobacco_id')
    return id ? parseInt(id, 10) : 0
  }, [search])

  const { data, isLoading } = useVariants(bowl_id, tobacco_id)

  const bowls = useMemo(() => {
    return data ? data.bowls : undefined
  }, [data])

  const tobacco = useMemo(() => {
    return data ? data.tobacco : undefined
  }, [data])

  const onItemClick = useCallback(
    (id: number, type: 'bowl' | 'tobacco') => {
      let urlParams = ''
      if (type === 'bowl') {
        if (tobacco_id) {
          urlParams = `tobacco_id=${tobacco_id}#bowl_id=${id}`
        } else {
          urlParams = bowl_id && bowl_id === id ? '' : `bowl_id=${id}`
        }
      }
      if (type === 'tobacco') {
        if (bowl_id) {
          urlParams = `bowl_id=${bowl_id}#tobacco_id=${id}`
        } else {
          urlParams = tobacco_id && tobacco_id === id ? '' : `tobacco_id=${id}`
        }
      }
      history.push(`/mixes?${urlParams}`)
    },
    [bowl_id, tobacco_id, history],
  )

  return (
    <>
      <MetaTitleMixes />
      <MetaDescriptionMixes />
      <MetaKeywordsMixes />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.container}>
          <Tobacco data={tobacco} onItemClick={onItemClick} tobacco_id={tobacco_id} />
          <Bowls data={bowls} onItemClick={onItemClick} bowl_id={bowl_id} />
        </div>
      )}
      <MixesMW />
    </>
  )
}

export default React.memo(MixesPage)

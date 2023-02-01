import Loader from 'components/common/Loader'
import React from 'react'
import { useParams } from 'react-router-dom'

import s from './MixesListPage.module.scss'
import useMixes from './useMixesList'

const MixesListPage = () => {
  const params = useParams<{ id: string; type: string }>()
  const { data, isLoading } = useMixes(parseInt(params.id, 10), params.type)
  return <>{isLoading ? <Loader /> : <div className={s.container}>container</div>}</>
}

export default React.memo(MixesListPage)

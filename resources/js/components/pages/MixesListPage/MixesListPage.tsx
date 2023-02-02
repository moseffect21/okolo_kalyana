/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MetaTitle } from 'components/app/MetaTags'
import Loader from 'components/common/Loader'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import VariantItem from './components/VariantItem'
import s from './MixesListPage.module.scss'
import useMixes from './useMixesList'

const MixesListPage = () => {
  const history = useHistory()
  const params = useParams<{ id: string; type: string }>()
  const { data, isLoading } = useMixes(parseInt(params.id, 10), params.type)

  return (
    <>
      <MetaTitle>
        {`Забивки ${params.type === 'bowl' ? 'чаши' : 'табака'} ${data ? data.name : ''}`}
      </MetaTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.container}>
          <div className={s.inner_container}>
            <div className={s.title}>
              <div className={s.icon_container} onClick={history.goBack}>
                <img src="/images/icons/next_white_arrow.svg" alt="" />
              </div>
              {data.name}
            </div>
            <div className={s.list}>
              {data.variants.map((item: any) => (
                <VariantItem
                  key={`variant_item_${item.id}`}
                  data={item}
                  type={params.type === 'bowl' ? 'tobacco' : 'bowl'}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default React.memo(MixesListPage)

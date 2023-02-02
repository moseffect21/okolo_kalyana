import parseYoutubeUrl from 'components/common/pureFunctions/parseYoutubeUrl'
import React, { useMemo } from 'react'

import s from '../MixesListPage.module.scss'

type Props = {
  data: any
  type: string
}

const VariantItem = ({ data, type }: Props) => {
  const links = useMemo(() => {
    const l = data.youtube_links ? data.youtube_links.split(', ') : []
    return l
  }, [data])
  return links.length ? (
    <div className={s.variant}>
      <div className={s.v_title}>
        {type === 'bowl' ? 'Чаша: ' : 'Табак: '}
        {data.name}
      </div>
      <div className={s.videos}>
        {links.map((item: any) => {
          return (
            <div className={s.item} key={item}>
              <iframe
                width="560"
                height="315"
                src={parseYoutubeUrl(item)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )
        })}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default React.memo(VariantItem)

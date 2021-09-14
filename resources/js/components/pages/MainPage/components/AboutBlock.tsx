import AboutCard from 'components/pages/AboutPage/AboutCard'
import React, { useState } from 'react'

import s from './AboutBlock.scss'

type Props = {
  data: any
}
const AboutBlock = ({ data }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className={s.container}>
      <div className={s.cards}>
        {data.map((item: any) => {
          return <AboutCard key={item.id} item={item} hovered={hovered} setHovered={setHovered} />
        })}
      </div>
    </div>
  )
}

export default AboutBlock

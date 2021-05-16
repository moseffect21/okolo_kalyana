import React from 'react'
import { Spinner } from 'react-activity'

import s from './Loader.scss'

const Loader = () => {
  return (
    <div className={s.loader_container}>
      <Spinner color="#ffffff" size={32} speed={1} animating />
    </div>
  )
}

export default Loader

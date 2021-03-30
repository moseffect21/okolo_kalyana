import React from 'react'
import { Meta } from 'react-head'

type Props = {
  children?: string
}

export const MetaKeywords = ({ children }: Props): React.ReactElement => {
  return <Meta name="keywords" content={children} />
}

export const MetaKeywordsMain = (): React.ReactElement => {
  return (
    <Meta
      name="keywords"
      content="Около кальяна"
    />
  )
}

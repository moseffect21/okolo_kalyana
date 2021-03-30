import React from 'react'
import { Meta } from 'react-head'

type Props = {
  children?: string
}

export const MetaDescription = ({ children }: Props): React.ReactElement => {
  return <Meta name="description" content={children} />
}

export const MetaDescriptionMain = (): React.ReactElement => {
  return (
    <Meta
      name="description"
      content="Около кальяна"
    />
  )
}

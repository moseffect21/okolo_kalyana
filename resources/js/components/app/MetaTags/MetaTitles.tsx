import React from 'react'
import { Title } from 'react-head'

type Props = {
  children?: string
}

export const MetaTitle = ({ children }: Props): React.ReactElement => {
  return <Title>{children}</Title>
}

export const MetaTitleMain = (): React.ReactElement => {
  return <Title>Около кальяна</Title>
}

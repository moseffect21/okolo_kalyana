import React from 'react'
import { Title } from 'react-head'

type Props = {
  children?: string
}

export const MetaTitle = ({ children }: Props): React.ReactElement => {
  return <Title>{children}</Title>
}

export const MetaTitleMain = (): React.ReactElement => {
  return <Title>Околокальяна — блог</Title>
}
export const MetaTitlePartners = (): React.ReactElement => {
  return <Title>Партнеры проекта</Title>
}
export const MetaTitleAbout = (): React.ReactElement => {
  return <Title>О нас</Title>
}
export const MetaTitleArticles = (): React.ReactElement => {
  return <Title>Статьи</Title>
}
export const MetaTitleVideos = (): React.ReactElement => {
  return <Title>Видео</Title>
}
export const MetaTitleMixes = (): React.ReactElement => {
  return <Title>Забивки</Title>
}

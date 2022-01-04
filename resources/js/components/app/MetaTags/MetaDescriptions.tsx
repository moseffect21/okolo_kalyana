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
      content="Это комьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в целую культуру, которая намного шире и богаче, чем просто «попускать дымок»."
    />
  )
}
export const MetaDescriptionPartners = (): React.ReactElement => {
  return (
    <Meta name="description" content="Кальянные бренды, которые помогают проекту развиваться." />
  )
}
export const MetaDescriptionAbout = (): React.ReactElement => {
  return (
    <Meta
      name="description"
      content={`Команда проекта "Околокальяна" - люди, которые создают контент.`}
    />
  )
}
export const MetaDescriptionArticles = (): React.ReactElement => {
  return <Meta name="description" content={`Полезная информация и обзоры в текстовом формате. `} />
}
export const MetaDescriptionVideos = (): React.ReactElement => {
  return (
    <Meta
      name="description"
      content="Информативные и обучающие видео, обзоры на кальянные продукты."
    />
  )
}

export const MetaDescriptionMixes = (): React.ReactElement => {
  return (
    <Meta
      name="description"
      content="Информативные и обучающие видео, обзоры на кальянные продукты."
    />
  )
}

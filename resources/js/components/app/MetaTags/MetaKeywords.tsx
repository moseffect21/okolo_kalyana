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
      content="кальян, табак, чаша, чашка, смесь, чай, забить, миксология, кальянная, около кальяна, околокальяна, уголь, дома, россия, рф, ру, туториал, забивка, купить, заказать, обзор"
    />
  )
}
export const MetaKeywordsPartners = (): React.ReactElement => {
  return (
    <Meta
      name="keywords"
      content="бренд, производитель, табак, чаша, чашка, смесь, чай, уголь, кальян, купить, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
    />
  )
}
export const MetaKeywordsAbout = (): React.ReactElement => {
  return (
    <Meta
      name="keywords"
      content="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
    />
  )
}
export const MetaKeywordsArticles = (): React.ReactElement => {
  return (
    <Meta
      name="keywords"
      content="отзыв, лайфхак, кальянный, табак, совет, для, новичков, начинающих, новичок, начинающий, обзор, кальян, табак, чаша, чашка, смесь, чай, вред, курение, околокальяна, около кальяна, россия, рф, ру, туториал, обучение, забить, забивка, купить, заказать"
    />
  )
}
export const MetaKeywordsVideos = (): React.ReactElement => {
  return (
    <Meta
      name="keywords"
      content="кальян, табак, чаша, чашка, смесь, чай, обзор, видеообзор, ютуб, околокальяна, россия, рф, ру, смотреть, блог, кальянный, про, около кальяна, туториал, обучение, забить, забивка, купить, заказать"
    />
  )
}

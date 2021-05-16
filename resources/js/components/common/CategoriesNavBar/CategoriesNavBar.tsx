/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import apiClient from 'apiClient'
import { useQuery } from 'react-query'

import s from './CategoriesNavBar.scss'
// const categories = [
//   {
//     id: 1,
//     name: 'Видео',
//     icon: '/images/icons/youtube.svg',
//     slug: 'video',
//     sub_categories: [
//       {
//         id: 5,
//         name: 'Новичкам',
//       },
//       { id: 6, name: 'Миксология' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Статьи',
//     icon: '/images/icons/doc.svg',
//     slug: 'article',
//     sub_categories: [
//       {
//         id: 7,
//         name: 'Новичкам',
//       },
//       { id: 8, name: 'Миксология' },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Новости',
//     slug: 'news',
//     icon: '/images/icons/speaker.svg',
//   },
//   {
//     id: 4,
//     name: 'Конкурсы',
//     slug: 'concurs',
//     icon: '/images/icons/trophy.svg',
//   },
// ]

const fetchCategories = () => {
  const data = apiClient.get('/api/v1/categories')

  return data
}

const CategoriesNavBar = () => {
  const { data, isLoading } = useQuery(['categories'], fetchCategories)
  const [openedMap, setOpenedMap] = useState<any>([])

  const categories = data ? data.data : []

  const { params } = useRouteMatch<{ slug?: string }>()

  const triggerCateg = (id: number) => {
    setOpenedMap((prev: any) => {
      const newArr = prev.slice(0)
      if (newArr.includes(id)) {
        return newArr.filter((item: number) => item !== id)
      }
      newArr.push(id)
      return newArr
    })
  }

  return (
    <div className={s.container}>
      {!isLoading &&
        categories &&
        categories.map((item: any) => {
          return (
            <div className={`${s.item} ${params.slug === item.slug ? s.active : ''}`} key={item.id}>
              <NavLink to={`/blog/${item.slug}`} className={s.row}>
                <img
                  src={
                    item.slug === 'video'
                      ? '/images/icons/youtube.svg'
                      : item.slug === 'articles'
                      ? '/images/icons/doc.svg'
                      : '/images/icons/speaker.svg'
                  }
                  alt=""
                  className={s.icon}
                />
                <span className={s.text}>{item.name}</span>
                {item.child_categories && item.child_categories.length ? (
                  <img
                    src="/images/icons/arrow_down.svg"
                    alt=""
                    className={`${s.trigger} ${openedMap.includes(item.id) ? s.active : ''}`}
                    onClick={(e: any) => {
                      e.preventDefault()
                      e.stopPropagation()
                      triggerCateg(item.id)
                    }}
                  />
                ) : (
                  <></>
                )}
              </NavLink>
              {item.child_categories && item.child_categories.length ? (
                <VelocityTransitionGroup
                  enter={{ animation: 'slideDown' }}
                  leave={{ animation: 'slideUp' }}
                  duration={500}
                >
                  {openedMap.includes(item.id) && (
                    <div className={s.sub_categ}>
                      {item.child_categories.map((item2: any) => {
                        return (
                          <NavLink to={`/blog/${item2.slug}`} className={s.row} key={item2.id}>
                            <span className={s.text}>{item2.name}</span>
                          </NavLink>
                        )
                      })}
                    </div>
                  )}
                </VelocityTransitionGroup>
              ) : (
                <></>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default CategoriesNavBar

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import { NavLink, useRouteMatch } from 'react-router-dom'

import s from './CategoriesNavBar.scss'

const categories = [
  {
    id: 1,
    name: 'Видео',
    icon: '/images/icons/youtube.svg',
    slug: 'video',
    sub_categories: [
      {
        id: 5,
        name: 'Новичкам',
      },
      { id: 6, name: 'Миксология' },
    ],
  },
  {
    id: 2,
    name: 'Статьи',
    icon: '/images/icons/doc.svg',
    slug: 'article',
    sub_categories: [
      {
        id: 7,
        name: 'Новичкам',
      },
      { id: 8, name: 'Миксология' },
    ],
  },
  {
    id: 3,
    name: 'Новости',
    slug: 'news',
    icon: '/images/icons/speaker.svg',
  },
  {
    id: 4,
    name: 'Конкурсы',
    slug: 'concurs',
    icon: '/images/icons/trophy.svg',
  },
]

const CategoriesNavBar = () => {
  const [openedMap, setOpenedMap] = useState<any>([])

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
      {categories.map((item: any) => {
        return (
          <div className={`${s.item} ${params.slug === item.slug ? s.active : ''}`} key={item.id}>
            <NavLink to={`/blog/${item.slug}`} className={s.row}>
              <img src={item.icon} alt="" className={s.icon} />
              <span className={s.text}>{item.name}</span>
              {item.sub_categories && (
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
              )}
            </NavLink>
            {item.sub_categories && (
              <VelocityTransitionGroup
                enter={{ animation: 'slideDown' }}
                leave={{ animation: 'slideUp' }}
                duration={500}
              >
                {openedMap.includes(item.id) && (
                  <div className={s.sub_categ}>
                    {item.sub_categories.map((item2: any) => {
                      return (
                        <div className={s.row} key={item2.id}>
                          <span className={s.text}>{item2.name}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </VelocityTransitionGroup>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CategoriesNavBar

/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import apiClient from 'apiClient'
import { isArray } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'

import Loader from '../Loader'
import { AuthMW } from '../modalWindows'

import s from './HeaderMobile.scss'

const fetchCategories = async () => {
  const data = await apiClient.get('/api/v1/categories')

  return data
}

const HeaderMobile = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const [searchVal, setSearchVal] = useState<string>('')
  const [searchIsLoading, setSearchIsLoading] = useState<boolean>(false)
  const [searchResult, setSearchResult] = useState<any>()
  const { params } = useRouteMatch<{ pathname1?: string; pathname2?: string }>()

  const title = useMemo(() => {
    let val: string = ''
    if (params) {
      val =
        params.pathname1 === 'partners' ? 'Партнеры' : params.pathname1 === 'about' ? 'О нас' : ''

      if (params.pathname2) {
        val =
          params.pathname2 === 'video'
            ? 'Видео'
            : params.pathname2 === 'articles'
            ? 'Статьи'
            : params.pathname2 === 'contests'
            ? 'Конкурсы'
            : ''
      }
    }
    return val
  }, [params])

  const { data, isLoading } = useQuery(['categories'], fetchCategories)
  const [openedMap, setOpenedMap] = useState<any>([])

  const categories = data ? data.data : []

  const location = useLocation()
  useEffect(() => {
    if (menuOpened) {
      $('html,body').css('overflow', 'hidden')
    } else {
      $('html,body').css('overflow', 'unset')
    }
  }, [menuOpened])

  useEffect(() => {
    if (searchVal) {
      setSearchIsLoading(true)
      apiClient.get(`/api/v1/search?text=${searchVal}`).then((response: any) => {
        if (isArray(response.data)) {
          setSearchResult(response.data)
        } else {
          setSearchResult([])
        }
        setSearchIsLoading(false)
      })
    }
  }, [searchVal])

  return (
    <>
      <div className={s.header_container}>
        <div className={s.left} onClick={() => setMenuOpened(!menuOpened)}>
          <img src="/images/icons/menu_icon.svg" alt="" className={s.menu_icon} />
        </div>
        <div className={s.title}>{title}</div>
        <div className={s.right}>
          <NavLink to="/" onClick={() => setMenuOpened(false)}>
            <img src="/images/logo.svg" alt="" className={s.logo} />
          </NavLink>
        </div>
      </div>
      <div className={`${s.mobile_menu} ${menuOpened ? s.opened : ''}`}>
        <div className={s.search_wrapper}>
          <label className={s.search_block} htmlFor="search_input">
            <img src="/images/icons/scope.svg" alt="" />
            <input
              type="text"
              placeholder="Поиск"
              value={searchVal}
              id="search_input"
              onChange={(e: any) => {
                setSearchVal(e.target.value)
              }}
            />
          </label>
        </div>
        {searchVal ? (
          <div className={s.search_container}>
            {searchIsLoading ? (
              <Loader color="#6e6e73" />
            ) : (
              <div>
                <div className={s.txt}>Результаты поиска</div>
                {searchResult && searchResult.length ? (
                  searchResult.map((item: any) => {
                    return (
                      <NavLink
                        className={s.search_item}
                        key={item.id}
                        onClick={() => setMenuOpened(false)}
                        to={`/blog/${
                          item.type === 'video'
                            ? 'videos'
                            : item.type === 'article'
                            ? 'articles'
                            : 'contests'
                        }/${item.id}`}
                      >
                        <div className={s.img_block}>
                          <img src={`/storage/${item.preview_img}`} alt="" />
                        </div>
                        <div className={s.item_title}>{item.title}</div>
                      </NavLink>
                    )
                  })
                ) : (
                  <div className={s.empty}>По вашему запросу ничего не найдено</div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className={s.nav_container}>
            {categories ? (
              categories.map((item: any) => {
                return (
                  <NavLink
                    to={`/blog/${item.slug}`}
                    onClick={() => setMenuOpened(false)}
                    key={item.id}
                  >
                    {item.name}
                  </NavLink>
                )
              })
            ) : (
              <></>
            )}
            <NavLink to="/mixes" onClick={() => setMenuOpened(false)}>
              Забивки
            </NavLink>
            <NavLink to="/partners" onClick={() => setMenuOpened(false)}>
              Партнеры
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpened(false)}>
              О нас
            </NavLink>
            <NavLink to={`${location.pathname}?auth=1`} onClick={() => setMenuOpened(false)}>
              Войти
            </NavLink>
          </div>
        )}
      </div>
      <AuthMW />
    </>
  )
}

export default HeaderMobile

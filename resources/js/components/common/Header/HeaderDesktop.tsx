/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import Loader from '../Loader'
import { AuthMW } from '../modalWindows'

import s from './HeaderDesktop.scss'

const HeaderDesktop = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchVal, setSearchVal] = useState<string>('')
  const location = useLocation()
  return (
    <>
      {showSearch && <div className={s.shadow} />}
      <div className={`${s.header_container} ${location.pathname === '/' ? s.fixed : ''}`}>
        {showSearch ? (
          <div className={s.content}>
            <div className={s.search_wrapper}>
              <label className={s.search_block}>
                <img src="/images/icons/scope.svg" alt="" />
                <input
                  type="text"
                  placeholder="Поиск"
                  value={searchVal}
                  onChange={(e: any) => {
                    setSearchVal(e.target.value)
                  }}
                />
                <img
                  src="/images/icons/close_circle.svg"
                  alt=""
                  className={s.search_close}
                  onClick={() => setShowSearch(false)}
                />
              </label>
              {searchVal ? (
                <div className={s.search_result}>
                  <div className={s.txt}>Результаты поиска:</div>
                  <Loader color="#6e6e73" />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <div className={s.content}>
            <NavLink to="/" className={s.left}>
              <img src="/images/logo.svg" alt="" />
            </NavLink>
            <div className={s.right}>
              <div className={s.nav_item}>
                <NavLink to="/blog/articles" activeClassName={s.active}>
                  Статьи
                </NavLink>
              </div>
              <div className={s.nav_item}>
                <NavLink to="/blog/video" activeClassName={s.active}>
                  Видео
                </NavLink>
              </div>
              <div className={s.nav_item}>
                <NavLink to="/partners" activeClassName={s.active}>
                  Партнеры
                </NavLink>
              </div>
              <div className={s.nav_item}>
                <NavLink to="/about" activeClassName={s.active}>
                  О нас
                </NavLink>
              </div>
              <div className={s.nav_item}>
                <NavLink to={`${location.pathname}?auth=1`}>Войти</NavLink>
              </div>
              <div
                className={s.img_block}
                onClick={() => {
                  setShowSearch((prev) => {
                    return !prev
                  })
                }}
              >
                <img src="/images/icons/scope.svg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <AuthMW />
    </>
  )
}

export default HeaderDesktop

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { AuthMW } from '../modalWindows'

import s from './HeaderMobile.scss'

const HeaderMobile = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const [searchVal, setSearchVal] = useState<string>('')
  const location = useLocation()
  useEffect(() => {
    if (menuOpened) {
      $('html,body').css('overflow', 'hidden')
    } else {
      $('html,body').css('overflow', 'unset')
    }
  }, [menuOpened])
  return (
    <>
      <div className={s.header_container}>
        <div className={s.left} onClick={() => setMenuOpened(!menuOpened)}>
          <img src="/images/icons/menu_icon.svg" alt="" className={s.menu_icon} />
        </div>
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
        <div className={s.nav_container}>
          <NavLink to="/blog/articles" onClick={() => setMenuOpened(false)}>
            Статьи
          </NavLink>
          <NavLink to="/blog/video" onClick={() => setMenuOpened(false)}>
            Видео
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
      </div>
      <AuthMW />
    </>
  )
}

export default HeaderMobile

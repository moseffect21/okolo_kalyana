/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import s from './Header.scss'

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false)
  return (
    <div className={s.header_container}>
      <div className={s.content}>
        <div className={s.left}>
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
          {showSearch && (
            <label className={s.search_block}>
              <input type="text" placeholder="Поиск" />
            </label>
          )}
        </div>
        <div className={s.center}>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className={s.right}>
          <div className={s.nav_item}>
            <NavLink to="/blog">Блог</NavLink>
          </div>
          <div className={s.nav_item}>
            <NavLink to="/about">О нас</NavLink>
          </div>
          <div className={s.nav_item}>
            <NavLink to="/blog">Войти</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { VelocityTransitionGroup } from 'velocity-react'

import { AuthMW } from '../modalWindows'

import s from './Header.scss'

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const location = useLocation()
  return (
    <>
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
            <VelocityTransitionGroup
              enter={{ animation: 'fadeIn' }}
              leave={{ animation: 'fadeOut' }}
              duration={500}
            >
              {showSearch && (
                <div>
                  <label className={s.search_block}>
                    <input type="text" placeholder="Поиск" />
                  </label>
                </div>
              )}
            </VelocityTransitionGroup>
          </div>
          <NavLink to="/" className={s.center}>
            <img src="/images/logo.png" alt="" />
          </NavLink>
          <div className={s.right}>
            <div className={s.nav_item}>
              <NavLink to="/blog" activeClassName={s.active}>
                Блог
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
          </div>
        </div>
      </div>
      <AuthMW />
    </>
  )
}

export default Header

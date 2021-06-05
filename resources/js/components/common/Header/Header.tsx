/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { Context } from 'components/app/IsMobile'
import React, { useContext } from 'react'

import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
  const isMobile = useContext(Context)
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />
}

export default Header

/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react'
import Modal from 'react-modal'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Context } from 'components/app/IsMobile'

import mwStyle from '../ModalWindow.scss'

import s from './AuthMW.scss'

const AuthMW = () => {
  const location = useLocation()

  console.log(location)
  const params = new URLSearchParams(location.search)
  const isMobile = useContext(Context)
  const history = useHistory()
  const opened = !!params.get('auth')
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
      closeTimeoutMS={300}
      isOpen={opened}
      className={mwStyle.modal_window}
    >
      {isMobile ? (
        <svg
          className={s.close_button_mobile}
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // onClick={() => {
          //   dispatch(setAuthMwOpened(false))
          // }}
        >
          <line
            x1="2.70711"
            y1="1.29289"
            x2="28.7071"
            y2="27.2929"
            stroke="#E8E8E8"
            strokeWidth="2"
          />
          <line
            x1="1.29289"
            y1="27.2929"
            x2="27.2929"
            y2="1.29289"
            stroke="#E8E8E8"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <button className={s.close_button} type="button" onClick={history.goBack}>
          <img src="/images/icons/close.svg" alt="" />
        </button>
      )}
      <div className={s.inner_content}>
        <div className={s.auth_content}>
          <div className={s.title}>Войдите или создайте аккаунт</div>
          <div className={s.subtitle}>Авторизация</div>
          <div className={s.buttons_container}>
            <div className={s.button_item}>
              <a className={s.vk} href="/api/v1/login-vk">
                <div className={s.img_container}>
                  <img src="/image/icon/vk.svg" alt="" />
                </div>
                <span className={s.text}>ВКонтакте</span>
              </a>
            </div>
            <div className={s.button_item}>
              <a className={s.fb} href="/api/v1/login-fb">
                <div className={s.img_container}>
                  <img src="/image/icon/fb.svg" alt="" />
                </div>
                <span className={s.text}>Facebook</span>
              </a>
            </div>
            <div className={s.button_item}>
              <a className={s.gPlus} href="/api/v1/login-google">
                <div className={s.img_container}>
                  <img src="/image/icon/gPlus.svg" alt="" />
                </div>
                <span className={s.text}>Google</span>
              </a>
            </div>
          </div>

          {/* <div className={s.term}>
            I’m agree <Link to="/">terms and conditions</Link>
          </div> */}
        </div>
      </div>
    </Modal>
  )
}

export default AuthMW

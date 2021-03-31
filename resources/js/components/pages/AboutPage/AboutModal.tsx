import React from 'react'
import Modal from 'react-modal'
import { useHistory, useRouteMatch } from 'react-router-dom'

import s from './AboutModal.scss'

type Props = {
  item: any
}

const AboutModal = ({ item }: Props) => {
  const history = useHistory()
  const { params } = useRouteMatch<{ id?: string }>()
  const opened = item.id === parseInt(params.id!, 10)
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
      closeTimeoutMS={300}
      isOpen={opened}
      onRequestClose={history.goBack}
      className={s.modal_window}
    >
      <div className={s.container}>
        <button className={s.close_button} type="button" onClick={history.goBack}>
          <img src="/images/icons/close.svg" alt="" />
        </button>
        <div className={s.content}>
          <div className={s.img_block}>
            <img src={item.photo} alt="" />
          </div>
          <div className={s.name}>{item.name}</div>
          <div className={s.desc}>{item.desc}</div>

          <div className={s.full_desc}>
            <div className={`${s.quote} ${s.first}`}>
              <img src="/images/icons/quote.svg" alt="" />
            </div>
            <div className={s.text}>{item.full_desc}</div>
            <div className={`${s.quote} ${s.last}`}>
              <img src="/images/icons/quote.svg" alt="" />
            </div>
          </div>
          <div className={s.social_icons}>
            <a href="#" className={`${s.social_item} ${s.inst}`}>
              <img src="/images/icons/inst.svg" alt="" />
            </a>
            <a href="#" className={`${s.social_item} ${s.vk}`}>
              <img src="/images/icons/vk.svg" alt="" />
            </a>
            <a href="#" className={`${s.social_item} ${s.tg}`}>
              <img src="/images/icons/telegram.svg" alt="" />
            </a>
            <a href="#" className={`${s.social_item} ${s.youtube}`}>
              <img src="/images/icons/youtube2.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AboutModal

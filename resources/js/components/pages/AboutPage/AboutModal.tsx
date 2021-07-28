/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Context } from 'components/app/IsMobile'
import React, { useContext } from 'react'
import Modal from 'react-modal'
import { useHistory, useRouteMatch } from 'react-router-dom'

import s from './AboutModal.scss'

type Props = {
  item: any
}

const AboutModal = ({ item }: Props) => {
  const history = useHistory()
  const isMobile = useContext(Context)
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
            <img src={`/storage/${item.photo}`} alt="" />
            {isMobile && (
              <>
                <div className={s.shadow} />
                <div className={s.name}>{item.name}</div>
                <div className={s.desc}>{item.little_desc}</div>
              </>
            )}
          </div>
          {!isMobile && (
            <>
              <div className={s.name}>{item.name}</div>
              <div className={s.desc}>{item.little_desc}</div>
            </>
          )}

          {isMobile && (
            <div className={s.social_icons}>
              {item.inst_url ? (
                <a href={item.inst_url} className={`${s.social_item}`}>
                  <img src="/images/icons/inst_black.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
              {item.vk_url ? (
                <a href={item.vk_url} className={`${s.social_item}`}>
                  <img src="/images/icons/vk_black.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
              {item.tg_url ? (
                <a href={item.tg_url} className={`${s.social_item}`}>
                  <img src="/images/icons/tg_black.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
              {item.youtube_url ? (
                <a href={item.youtube_url} className={`${s.social_item}`}>
                  <img src="/images/icons/youtube_black.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
            </div>
          )}

          <div className={s.full_desc}>
            {!isMobile && (
              <div className={`${s.quote} ${s.first}`}>
                <img src="/images/icons/quote.svg" alt="" />
              </div>
            )}

            <div className={s.text} dangerouslySetInnerHTML={{ __html: item.description }} />

            {!isMobile && (
              <div className={`${s.quote} ${s.last}`}>
                <img src="/images/icons/quote.svg" alt="" />
              </div>
            )}
          </div>
          {!isMobile && (
            <div className={s.social_icons}>
              {item.inst_url ? (
                <a href={item.inst_url} className={`${s.social_item} ${s.inst}`}>
                  <img src="/images/icons/inst.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
              {item.vk_url ? (
                <a href={item.vk_url} className={`${s.social_item} ${s.vk}`}>
                  <img src="/images/icons/vk.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
              {item.tg_url ? (
                <a href={item.tg_url} className={`${s.social_item} ${s.tg}`}>
                  <img src="/images/icons/telegram.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
              {item.youtube_url ? (
                <a href={item.youtube_url} className={`${s.social_item} ${s.youtube}`}>
                  <img src="/images/icons/youtube2.svg" alt="" />
                </a>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default AboutModal

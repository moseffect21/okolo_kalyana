/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useMemo } from 'react'
import Modal from 'react-modal'
import { useHistory, useLocation } from 'react-router-dom'
import { Context } from 'components/app/IsMobile'
import useMix from 'components/pages/MixesPage/useMixes'
import Loader from 'components/common/Loader'
import parseYoutubeUrl from 'components/common/pureFunctions/parseYoutubeUrl'

import mwStyle from '../ModalWindow.scss'

import s from './MixesMW.module.scss'

Modal.setAppElement('#root')

const MixesMW = () => {
  const { search, hash } = useLocation()

  const requestData = useMemo(() => {
    const params = new URLSearchParams(search)

    const bowl_id = params.get('bowl_id')
    const tobacco_id = params.get('tobacco_id')
    if (hash) {
      if (bowl_id) {
        const id = parseInt(hash.replace('#tobacco_id=', ''), 10)
        return {
          bowl_id: parseInt(bowl_id, 10),
          tobacco_id: id,
        }
      }
      if (tobacco_id) {
        const id = parseInt(hash.replace('#bowl_id=', ''), 10)
        return {
          bowl_id: id,
          tobacco_id: parseInt(tobacco_id, 10),
        }
      }
    }
    return undefined
  }, [search, hash])

  const opened = useMemo(() => {
    if (requestData && (requestData.bowl_id || requestData.tobacco_id) && hash) {
      return true
    }
    return false
  }, [requestData, hash])

  const { data, isLoading } = useMix(
    requestData ? requestData.bowl_id : 0,
    requestData ? requestData.tobacco_id : 0,
  )

  const isMobile = useContext(Context)
  const history = useHistory()
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
      closeTimeoutMS={300}
      isOpen={opened}
      className={`${mwStyle.modal_window} ${mwStyle.white_modal} ${s.modal_window}`}
    >
      {isMobile ? (
        <svg
          className={s.close_button_mobile}
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            history.goBack()
          }}
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
        {isLoading ? (
          <Loader color="#1a3d4a" />
        ) : data && data.links ? (
          <div className={`${s.videos_container} ${data.links.length > 1 ? s.multiple : ''}`}>
            {data.links.map((item: any) => {
              return (
                <div className={s.item}>
                  <iframe
                    width="560"
                    height="315"
                    src={parseYoutubeUrl(item)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </Modal>
  )
}

export default React.memo(MixesMW)

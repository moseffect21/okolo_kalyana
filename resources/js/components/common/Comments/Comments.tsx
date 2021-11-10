/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'ReduxStore/rootReducer'

import s from './Comments.scss'

type Props = {
  data: any
  addCommentMutation: any
}

const Comments = ({ data, addCommentMutation }: Props) => {
  const { user } = useSelector(({ userReducer }: RootState) => ({
    user: userReducer.user,
  }))
  const [comment, setComment] = useState<string>('')

  const sendComment = () => {
    addCommentMutation.mutate({ comment })
    setComment('')
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      sendComment()
    }
  }

  return (
    <div className={s.container}>
      {user ? (
        <div className={s.input_block}>
          <label className={s.comment_input}>
            <img
              src={user ? user.avatar : '/images/user_default.png'}
              alt=""
              className={s.user_img}
            />
            <input
              type="text"
              placeholder="Введите комментарий..."
              value={comment}
              onChange={(e: any) => setComment(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <img
              src="/images/icons/send_icon.svg"
              alt=""
              className={s.send_img}
              onClick={() => sendComment()}
            />
          </label>
        </div>
      ) : (
        <div className={s.not_auth_txt}>Авторизуйтесь, чтобы оставить комментарий</div>
      )}

      <div className={s.title}>Комментарии ({data && data.length ? data.length : 0})</div>

      <div className={s.comments_items}>
        {data ? (
          data.map((item: any) => {
            return (
              <div className={s.item}>
                <img
                  src={item.user_image ? item.user_image : '/images/user_default.png'}
                  alt=""
                  className={s.user_img}
                />
                <div className={s.center}>
                  <div className={s.top_block}>
                    <span className={s.nickname}>{item.nickname ? item.nickname : 'Аноним'}</span>
                  </div>
                  <div className={s.text}>{item.text ? item.text : ''}</div>
                </div>
              </div>
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Comments

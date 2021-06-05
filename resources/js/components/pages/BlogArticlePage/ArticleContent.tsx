/* eslint-disable no-nested-ternary */
import { Context } from 'components/app/IsMobile'
import Comments from 'components/common/Comments'
import Loader from 'components/common/Loader'
import React, { useContext } from 'react'

import s from './ArticleContent.scss'
import { addComment } from './useArticle'

type Props = {
  isLoading: boolean
  article: any
}

const ArticleContent = ({ article, isLoading }: Props) => {
  const isMobile = useContext(Context)
  const addCommentMutation = addComment(article.id)
  return (
    <div className={s.content}>
      {isLoading ? (
        <Loader />
      ) : isMobile ? (
        <div className={s.mobile_content}>
          <div className={s.video_block}>
            <iframe
              width="560"
              height="315"
              src={article.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className={s.inner_content}>
            <div className={s.title}>{article.title}</div>
            <div className={s.text}>{article.content}</div>
            <div className={s.action_block}>
              <div className={s.item}>
                <img src="/images/icons/heart_icon.svg" alt="" />
                <span>0</span>
              </div>
              <div className={s.item}>
                <img src="/images/icons/comment_icon.svg" alt="" />
                <span>0</span>
              </div>
              <div className={s.date}>10 августа 2013</div>
            </div>
            <div className={s.input_block}>
              <label className={s.comment_input}>
                <img src="/images/user_default.png" alt="" className={s.user_img} />
                <input type="text" placeholder="Введите комментарий..." />
                <img src="/images/icons/send_icon.svg" alt="" className={s.send_img} />
              </label>
            </div>
          </div>
          <div className={s.see_also}>
            <div className={s.title}>Посмотрите также:</div>
          </div>
        </div>
      ) : (
        <>
          <div className={s.title}>{article.title}</div>
          <div className={s.video_block}>
            <iframe
              width="560"
              height="315"
              src={article.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className={s.text}>{article.content}</div>
          <Comments data={article.comments} addCommentMutation={addCommentMutation} />
        </>
      )}
    </div>
  )
}

export default ArticleContent

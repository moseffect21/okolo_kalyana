/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { Context } from 'components/app/IsMobile'
import Comments from 'components/common/Comments'
import Loader from 'components/common/Loader'
import ToastNotify from 'components/common/ToastNotify'
import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import s from './ArticleContent.scss'
import { addComment } from './useArticle'

type Props = {
  isLoading: boolean
  article: any
}

const ArticleContent = ({ article, isLoading }: Props) => {
  const isMobile = useContext(Context)
  const { params } = useRouteMatch<{ comments?: string }>()
  const isComments = !!(params && params.comments)
  const addCommentMutation = addComment(article.id, () => {
    ToastNotify('Комментарий отправлен!', 'success')
  })
  const [comment, setComment] = useState<string>('')
  return (
    <div className={s.content}>
      {isLoading ? (
        <Loader />
      ) : isMobile ? (
        <div className={s.mobile_content}>
          <div className={s.video_block}>
            {article.type === 'video' ? (
              <iframe
                width="560"
                height="315"
                src={article.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={article.preview_img} alt="" />
            )}
          </div>
          {isComments ? (
            <>
              <div className={`${s.inner_content} ${s.comments_content}`}>
                <div className={s.title}>Комментарии</div>
                <div className={s.comments_wrapper}>
                  {article.comments && article.comments.length ? (
                    article.comments.map((item: any) => {
                      return (
                        <div className={s.comment_item}>
                          <div className={s.comment_img}>
                            <img src="/images/user_default.png" alt="" />
                          </div>
                          <div className={s.center}>
                            <div className={s.comment_name}>
                              {item.nickname ? item.nickname : 'Аноним'}
                            </div>
                            <div className={s.comment_txt}>{item.text ? item.text : ''}</div>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div className={s.empty_list}>Список комментариев пуст</div>
                  )}
                </div>
                <div className={`${s.input_block} ${s.fixed_input}`}>
                  <label className={s.comment_input}>
                    <img src="/images/user_default.png" alt="" className={s.user_img} />
                    <input
                      type="text"
                      placeholder="Введите комментарий..."
                      value={comment}
                      onChange={(e: any) => setComment(e.target.value)}
                    />
                    <img
                      src="/images/icons/send_icon.svg"
                      alt=""
                      className={s.send_img}
                      onClick={() => {
                        addCommentMutation.mutate({ comment })
                        setComment('')
                      }}
                    />
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
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
                    <input
                      type="text"
                      placeholder="Введите комментарий..."
                      value={comment}
                      onChange={(e: any) => setComment(e.target.value)}
                    />
                    <img
                      src="/images/icons/send_icon.svg"
                      alt=""
                      className={s.send_img}
                      onClick={() => {
                        addCommentMutation.mutate({ comment })
                        setComment('')
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className={s.see_also}>
                <div className={s.title}>Посмотрите также:</div>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <div className={s.title}>{article.title}</div>
          <div className={s.video_block}>
            {article.type === 'video' ? (
              <iframe
                width="560"
                height="315"
                src={article.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={article.preview_img} alt="" />
            )}
          </div>
          <div className={s.text}>{article.content}</div>
          <Comments data={article.comments} addCommentMutation={addCommentMutation} />
        </>
      )}
    </div>
  )
}

export default ArticleContent

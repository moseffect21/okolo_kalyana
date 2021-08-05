/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { Context } from 'components/app/IsMobile'
import Comments from 'components/common/Comments'
import Loader from 'components/common/Loader'
import ToastNotify from 'components/common/ToastNotify'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import moment from 'moment'
import OfferBar from 'components/common/OfferBar'

import s from './ArticleContent.scss'
import { addComment } from './useArticle'

type Props = {
  isLoading: boolean
  article: any
  offer: any
}

const ArticleContent = ({ article, isLoading, offer }: Props) => {
  const isMobile = useContext(Context)
  const { params } = useRouteMatch<{ comments?: string }>()
  const isComments = !!(params && params.comments)
  const addCommentMutation = addComment(article.id, () => {
    ToastNotify('Комментарий отправлен!', 'success')
  })
  const [comment, setComment] = useState<string>('')
  const location = useLocation()

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
              <img src={`/storage/${article.preview_img}`} alt="" />
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
                <div className={s.text} dangerouslySetInnerHTML={{ __html: article.content }} />
                <div className={s.action_block}>
                  {/* <div className={s.item}>
                    <img src="/images/icons/heart_icon.svg" alt="" />
                    <span>0</span>
                  </div> */}
                  <NavLink className={s.item} to={`${location.pathname}/comments`}>
                    <img src="/images/icons/comment_icon.svg" alt="" />
                    <span>
                      {article.comments && article.comments.length ? article.comments.length : 0}
                    </span>
                  </NavLink>
                  <div className={s.date}>{moment(article.created_at).format('DD MMMM YYYY')}</div>
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
                <div className={s.offer_container}>
                  {offer ? (
                    offer.map((item: any) => {
                      return (
                        <div className={s.offer_item}>
                          <img src={`/storage/${item.preview_img}`} alt="" />
                          <div className={s.shadow} />
                          <div className={s.offer_name}>{item.title}</div>
                        </div>
                      )
                    })
                  ) : (
                    <></>
                  )}
                </div>
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
              <img src={`/storage/${article.preview_img}`} alt="" />
            )}
          </div>
          <div className={s.text} dangerouslySetInnerHTML={{ __html: article.content }} />
          <Comments data={article.comments} addCommentMutation={addCommentMutation} />
        </>
      )}
    </div>
  )
}

export default ArticleContent

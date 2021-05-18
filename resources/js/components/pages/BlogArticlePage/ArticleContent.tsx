import Comments from 'components/common/Comments'
import Loader from 'components/common/Loader'
import React from 'react'

import s from './ArticleContent.scss'
import { addComment } from './useArticle'

type Props = {
  isLoading: boolean
  article: any
}

const ArticleContent = ({ article, isLoading }: Props) => {
  const addCommentMutation = addComment(article.id)
  return (
    <div className={s.content}>
      {isLoading ? (
        <Loader />
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

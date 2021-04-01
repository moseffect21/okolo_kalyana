import Comments from 'components/common/Comments'
import React from 'react'

import s from './ArticleContent.scss'

const ArticleContent = () => {
  return (
    <div className={s.content}>
      <div className={s.title}>
        Космические чаши MOON | Как забивать и прогревать? | Обзор + Розыгрыш
      </div>
      <div className={s.video_block}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/marWMcSnPlU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={s.text}>
        Тут будет какое нибудь описание к видео и всякие прочие примочки "Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
      <Comments />
    </div>
  )
}

export default ArticleContent

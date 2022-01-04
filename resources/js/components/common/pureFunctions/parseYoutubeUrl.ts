/* eslint-disable no-useless-escape */
const parseYoutubeUrl = (videoLink: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
  const match = videoLink.match(regExp)
  if (match && match[2].length === 11) {
    if (!videoLink.startsWith('https://www.youtube.com/embed/')) {
      return `https://www.youtube.com/embed/${match[2]}`
    }
  }
  return videoLink
}

export default parseYoutubeUrl

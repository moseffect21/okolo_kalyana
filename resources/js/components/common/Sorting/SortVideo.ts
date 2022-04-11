/* eslint-disable array-callback-return */

import splitByThree from '../pureFunctions/splitByThree'

/* eslint-disable no-plusplus */
const SortVideo = (videoArr: any) => {
  const newArr: any = []
  let c = 0

  const data = splitByThree(videoArr)

  data.map((item: any) => {
    newArr[c] = []
    newArr[c].push(item[0])
    if (item[1] && item[2]) {
      newArr[c].push([item[1], item[2]])
    } else if (item[1]) {
      newArr[c].push([item[1]])
    }
    c++
  })
  return newArr
}

export default SortVideo

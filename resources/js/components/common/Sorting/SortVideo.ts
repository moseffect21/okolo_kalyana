/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
const SortVideo = (videoArr: any) => {
  const newArr: any = []
  let c = 0

  videoArr.map((item: any, i: number) => {
    if (i === 0 || i % 3 === 0) {
      newArr[c] = []
      newArr[c][0] = item
    } else if (i === 1 || i % 4 === 0) {
      newArr[c][1] = []
      newArr[c][1][0] = item
    } else if (newArr[c][1] && newArr[c][1].length === 1) {
      newArr[c][1][1] = item
      c++
    }
  })
  return newArr
}

export default SortVideo

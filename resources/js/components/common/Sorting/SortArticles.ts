/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
const SortArticles = (arr: any) => {
  const newArr: any = []
  let c = 0

  arr.map((item: any, i: number) => {
    if (!newArr[c]) newArr[c] = []
    newArr[c].push(item)
    if (i !== 0 && (i + 1) % 4 === 0) {
      c++
    }
  })
  return newArr
}

export default SortArticles

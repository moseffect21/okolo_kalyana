const splitByThree = (data: any) => {
  const arr: any = []
  if (data && data.length) {
    for (let i = 0; i < data.length; i += 3) {
      if (data[i] && data[i + 1] && data[i + 2]) {
        arr.push([data[i], data[i + 1], data[i + 2]])
      } else if (data[i] && data[i + 1]) {
        arr.push([data[i], data[i + 1]])
      } else if (data[i]) {
        arr.push([data[i]])
      }
    }
  }
  return arr
}

export default splitByThree

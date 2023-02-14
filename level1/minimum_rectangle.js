function solution(sizes) {
  let widthList = []
  let heightList = []
  sizes.forEach(size=>{
    const [x,y] = size
    if(x > y) {
      widthList.push(x)
      heightList.push(y)
    } else {
      widthList.push(y)
      heightList.push(x)
    }
  })
  widthList.sort((pre,next)=> next-pre)
  // console.log(widthList)
  heightList.sort((pre,next)=> next-pre)
  // console.log(heightList)

  return widthList[0] * heightList[0];
}

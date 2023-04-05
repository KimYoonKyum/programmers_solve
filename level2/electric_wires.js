function solution(n, wires) {
  let answer = n;

  const find = (list, initialNode) => {
    list.forEach(item=>item[2]=0)
    let count = 1

    const innerFind = (startNode) => {
      for(let idx=0; idx < list.length; idx++) {
        const [start,end,visit] = list[idx]

        if(!visit &&(startNode === end || startNode === start)) {
          count++
          list[idx][2] = 1
          innerFind(start)
          innerFind(end)
        }
      }
    }

    innerFind(initialNode)

    return count
  }

  wires.forEach((wire, idx)=>{
    const [start,end] = wire
    const newWires = wires.slice()
    newWires.splice(idx,1)

    const firstNodeCount = find(newWires,start)
    const secondNodeCount = find(newWires,end)
    const diff = Math.abs(firstNodeCount - secondNodeCount)

    answer = answer > diff ? diff : answer
  })

  console.log(answer)

  return answer;
}

solution(9,[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])
solution(4,[[1,2],[2,3],[3,4]])
solution(7,[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])
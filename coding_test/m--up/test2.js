function solution(qs) {
  let answer = []

  const isPal = (str) => {
    for (let i = 0; i <= Math.floor(str.length / 2); i++ ) {
      if (str[i] === str[str.length - 1 - i]) {
        return true
      }
    }
  }
  const isSearch = (arr,select,move,moveArr) => {
    if(isPal(arr)) {
      moveArr.push(move)
      return
    }
    if(select === arr.length) {
      moveArr.push(0)
      return
    }
    if(arr[select] === 0) {
      isSearch(arr, select + 1, move + 1,moveArr)
    } else {
      arr[select] = arr[select] - 1
      isSearch(arr,select,move+1,moveArr)
    }
  }

  qs.forEach(q=>{
    let moveArr = []
    for(let start=0; start < q.length;start++) {
      isSearch(q,start,0,moveArr)
    }
    console.log(moveArr.sort((a,b)=>a-b))
  })
  return answer
}

solution([[2,0],[3,1]])
solution([[1,4,3],[1,2,2]])
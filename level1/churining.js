function solution(n, lost, reserve) {

  let arr = new Array(n)

  for(let idx = 0; idx < arr.length;idx++){
    arr[idx] = 1
  }

  for(const lo of lost) {
    arr[lo-1] = 0
  }

  for(const re of reserve) {
    if(arr[re-1] ===0) arr[re-1] =1
    else arr[re-1] = 2
  }
  console.log(arr)

  for(let idx = 0; idx < arr.length;idx++){
    if(arr[idx] === 2) {

      if(idx-1 >= 0 && arr[idx-1] === 0) {
        arr[idx-1] = 1
        arr[idx] = 1
      }

      if(idx+1 < arr.length && arr[idx] === 2 && arr[idx+1] === 0 ) {
        arr[idx+1] = 1
        arr[idx] = 1
      }
    }
  }

  console.log(arr)


  let answer = 0;
  arr.forEach(a=>{
    if(a != 0) answer++
  })
  console.log(answer)

  console.log('')
  console.log('')

  return answer;
}

solution(5,[2,4],[1,3,5])
solution(5,[2,4],[3])
solution(3,[3],[1])
solution(5,[1,2],[2,3])
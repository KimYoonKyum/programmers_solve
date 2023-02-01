function solution(numbers) {
  let answer = []

  numbers.sort((a,b)=>{
    return a-b
  })

  while(numbers.length > 0) {
    answer.push(numbers.shift())
    if (numbers.length !== 0) answer.push(numbers.pop())
  }

  return answer;
}

// solution([3,5,4,1,6])
solution([-1,6,0,2,9,-8])
solution([0])

function solution(numbers) {
  let answer = []

  numbers.sort((a,b)=>{
    if(a>b) return -1
    if(a<b) return 1
    return 0
  })

  while(numbers.length > 0) {
    answer.push(numbers.shift())
    if (numbers.length !== 0) answer.push(numbers.pop())
  }

  return answer;
}
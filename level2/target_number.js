function solution(numbers, target) {
  let answer = 0;

  answer += dfs(numbers[0],1,numbers,target)
  answer += dfs(-numbers[0],1,numbers,target)
  console.log(answer)
  return answer;
}

function dfs(curr, next, arr, target) {

  if(next >= arr.length) {
    if(target === curr) return 1
    return 0
  }

  let answer = 0;
  answer += dfs(curr+arr[next],next+1,arr,target)
  answer += dfs(curr-arr[next],next+1,arr,target)

  return answer
}

solution([1, 1, 1, 1, 1],	3)
solution([4, 1, 2, 1],4)

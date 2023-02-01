function solution(arr, divisor) {
  let answer = [];
  arr.sort((a,b)=>{
    if(Number(a) > Number(b)) return 1
    else if(Number(a) < Number(b)) return -1
    return 0
  })
  arr.forEach(a=>{
    if(a%divisor === 0) answer.push(a)
  })

  return answer.length ? answer : [-1];
}

solution([5, 9, 7, 10],	5)
solution([2, 36, 1, 3]	,	1)
solution([3,2,6]	,	10)

function solution(arr, divisor) {
  const res = arr.filter(v => {
    if (v % divisor === 0) return v
  }).sort((a, b) => a - b);
  return res.length ? res : [-1];
}
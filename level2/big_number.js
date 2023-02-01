function solution(numbers) {
  var answer = '';

  const sorted = numbers.sort((a,b)=>{
   const x = parseInt(a.toString() + b.toString())
   const y = parseInt(b.toString() + a.toString())
  return y-x
  })
  if(sorted[0] === 0) return '0'
  sorted.forEach(s=>answer+=String(s))
  return String(answer);
}

// solution([3, 30, 34, 5, 9])
solution([6,10,2])
function solution(citations) {
  const n = citations.length
  let h = 0

  const result = []
  citations.sort((pre,next)=>next - pre)

  if(citations.filter(c=> c < 1).length === citations.length) {
    return 0
  }

  for(let i = 0; i < n; i++) {
    citations[i] <= i && result.push(i)
  }
  result.sort((p,n)=>p-n)
  console.log(result[0]||citations.length)

  return result[0];
}

// solution([4, 3, 1, 1, 2])
// solution([10, 10, 10, 10, 10])
solution( [15, 12, 10, 8, 6, 3, 2, 1])
solution([6, 5, 3, 1, 0])
solution([25, 8, 5, 3, 3])
solution([30, 30, 30])
solution([0 ,0, 0, 0])

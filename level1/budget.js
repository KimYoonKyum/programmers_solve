function solution(d, budget) {
  d.sort((a,b)=>{
    if(Number(a) > Number(b)) return 1;
    else if(Number(a) < Number(b)) return -1;
    return 0
  });

  let sum = 0;
  let count = 0;
  for(let i=0; i<d.length;i++) {
    if(d[i] <= budget-sum) {
      sum += d[i]
      count++
    }
  }
  console.log(count)
  return count
}

solution([1, 3, 2, 5, 4], 9)
solution([1, 2, 3, 8], 13)
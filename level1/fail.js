function solution(N, stages) {
  let answer = [];
  let acc = stages.length;

  for(let idx=1; idx<=N;idx++) {
    const count = stages.filter(s => s===idx).length;
    answer.push({N:idx,fail:count/acc})
    acc -= count;
  }

  answer.sort((a,b)=>{
    if(Number(a.fail)<Number(b.fail)) return 1;
    if(Number(a.fail)>Number(b.fail)) return -1;
    return 0;
  })

  return answer.map(a=>{return a.N});
}

// solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]);
solution(4,	[4,4,4,4,4]);

function solution(answers) {
  let result = [
    {name:1,value:0},
    {name:2,value:0},
    {name:3,value:0}
    ];

  const A = [1,2,3,4,5]
  const B = [2,1,2,3,2,4,2,5]
  const C = [3,3,1,1,2,2,4,4,5,5]

  answers.forEach((a,idx)=>{
    if(A[idx%5] === a) result[0].value++;
    if(B[idx%8] === a) result[1].value++;
    if(C[idx%10] === a) result[2].value++;
  })

  let answer = []
  result.sort((a,b)=>{
    if(a.value > b.value) return -1;
    if(a.value < b.value) return 1;
    return 0
  })

  for(let idx=0;idx<result.length;idx++) {
    if(result[idx].value && result[0].value === result[idx].value) {
      answer.push(result[idx].name)
    }
  }

  return answer;
}

solution([1,3,2,4,2])
solution([1,2,3,4,5])
solution([3,3,1,1,2,2,4,4,5,5])
solution([1,1,1,1])
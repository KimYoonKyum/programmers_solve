function solution(a, b) {
  let answer = 0;

  a.forEach((i,idx)=>{
    answer += (i*b[idx])
  })
  return answer;
}
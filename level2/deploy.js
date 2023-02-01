function solution(progresses, speeds) {
  let answer = [];
  let work  = progresses.map(p=> 100-p)

  while(work.length > 0) {
    work.forEach((r,i)=>{
      work[i] = work[i] - speeds[i]
    })

    let deployDay = 0
    while(work[0] <= 0) {
      work.shift()
      speeds.shift()
      deployDay++
    }
    deployDay !==0 && answer.push(deployDay)
  }

  return answer;
}
solution([93, 30, 55],[1, 30, 5])
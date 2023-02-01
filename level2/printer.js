function solution(priorities, location) {
  var answer = 0;

  const queue = priorities.map((p,index)=>{
    return {value:p,target:index===location}
  })


  while(queue.length > 0) {
    const out = queue.shift()
    let flag = true
    for(let i = 0; i < queue.length;i++) {
      if(out.value < queue[i].value) {
        queue.push(out)
        flag=false
        break;
      }
    }
    if(flag) {
      answer++;
      if(out.target) break;
    }

  }


  return answer;
}

solution([2, 1, 3, 2],2)
solution([1,1,9,1,1,1],0)
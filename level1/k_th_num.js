function solution(array, commands) {
  let answer = [];

  commands.forEach(com => {
    // let arr = array.slice(com[0]-1,com[1]).sort()[com[2]-1]
    answer.push(array.slice(com[0]-1,com[1]).sort(
      (a,b)=>{
        if(Number(a) > Number(b)) return 1;
        if(Number(a) < Number(b)) return -1;
        return 0
      }
    )[com[2]-1])
  })
console.log(answer)
  return answer;
}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])
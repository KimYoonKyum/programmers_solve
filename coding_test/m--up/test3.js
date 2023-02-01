// function solution(v,q) {
//   let answer = []
//   q.forEach(command=>{
//     if(command[0] === 1) {
//       const target = [...v]
//       let sum = 0
//       answer.push(target.splice(command[1],command[2]).reduce((pre,curr)=>pre+curr,sum))
//     } else {
//       v.splice(command[1],1,command[2])
//     }
//   })
//   return answer
// }

function solution(v,q) {
  let answer = []
  q.forEach(command=>{
    if(command[0] === 1) {
      const target = [...v]
      let sum = 0
      answer.push(target.slice(command[1],command[2]+1).reduce((pre,curr)=>pre+curr,sum))
    } else {
      v.splice(command[1],1,command[2])
    }
  })
  return answer
}


solution([1,2,3,4,5],[[1,2,4],[2,3,8],[1,2,4]])
solution([1,2,3,4,5],[[1,2,3]])
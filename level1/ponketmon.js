function solution(nums) {

  let result = []
  let ponketmon = nums.length/2;

  nums.forEach(n=>{
    if(result.indexOf(n) === -1) result.push(n)
  })

  if(result.length >= ponketmon) return ponketmon
  else return result.length

}

solution([3,1,2,3])
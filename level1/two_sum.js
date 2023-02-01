function solution(numbers) {
  let answer = [];
  const nums = [...numbers];

  const combination = (nums,r) => {
    let result = [];
    if(r === 1) {
      return nums.map(e => [e]);
    }

    nums.forEach((e,i,array) => {
      let rest = array.slice(i+1);
      let combinations = combination(rest,r-1);
      let combiArr = combinations.map(x => [e, ...x])
      result.push(...combiArr);
    })

    return result;
  }

  combination(nums,2).forEach(com=>{
    let sum = (com[0]+com[1]);
    if(answer.indexOf(com[0]+com[1]) === -1) answer.push(sum)
  })

  answer.sort((a,b)=>{
    if(Number(a)<Number(b)) return -1;
    if(Number(a)>Number(b)) return 1;
    return 0;
  })


  return answer;
}

solution([2,1,3,4,1])
solution([5,0,2,7])
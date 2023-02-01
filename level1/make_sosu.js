function solution(arr) {
  const nums = [...arr]
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

  let comList = combination(nums,3).map(com=>{
    let sum = 0;
    sum +=(com[0]+com[1]+com[2])
    return sum
  }).sort((a,b)=>{
    if(Number(a) > Number(b)) return 1
    else if(Number(a) < Number(b)) return -1
    return 0
  })

  const size = comList[comList.length-1]
  const era = () => {
    let era = new Array(size)
    era[0] = 1
    era[1] = 1
    for(let i = 2 ; i <= size ; i++){
      era[i]=i;
    }

    for(let x = 2 ; x <= size ; x++){
      if(era[x] === 0) continue;

      for(let y = x + x ; y <= size ; y = y + x){
        if(era[y] === 0) continue;
        else era[y] = 0;
      }
    }
    return era
  }

  const re = era()

  let count = 0
  comList.forEach(i=>{
    if(re[i] !== 0) count++;
  })

  return count;
}

solution([1,2,7,6,4])
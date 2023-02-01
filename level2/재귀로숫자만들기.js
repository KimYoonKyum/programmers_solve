function solution(numbers) {
  var answer = 0;

  let result = []

  function sum(target,arr,index) {
    const source = [...arr]
    if(arr.length === 1) {
      result.push(target+arr[0])
      return;
    }

    let str = target+source[index]
    source.splice(index,1)
    for(let i=0; i<source.length;i++){
      const tempArr = [...source]
      sum(str,tempArr,i)
    }

  }
  for(let i=0;i<numbers.length;i++){
    sum('',numbers,i)
  }

  console.log(result)


  return answer;
}

solution([1])

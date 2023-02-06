function solution(input){
  let arr = []
  input.split('').forEach((i)=> {
    if(arr.length > 0 && arr[arr.length-1] !== i && i === ')') {
      arr.pop()
    } else {
      arr.push(i)
    }
  })

  return arr.length === 0;
}

solution("()()")
solution("()()(")
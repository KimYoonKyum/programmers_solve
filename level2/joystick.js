function solution(name) {
  let answer = 0;
  let str= []
  const alpha = []
  for(let i=0;i<name.length;i++) {
      alpha[i] = name.charCodeAt(i)>78 ?78-(name.charCodeAt(i)-78)-65 : name.charCodeAt(i)-65
      str.push('A')
  }

  answer += alpha[0]
  str[0] = name.charAt(0)

  let idx = 1

  // left->right
  // while(idx<name.length) {
  //   str[idx] = name.charAt(idx)
  //   answer = answer + alpha[idx] + 1
  //   idx++
  // }

  let reversIdx = name.length-1
  while(reversIdx > 0) {
    if(alpha[reversIdx] !== 0) {
      str[reversIdx] = name.charAt(reversIdx)
      answer = answer + alpha[reversIdx] + 1
    }
    reversIdx--
  }

  console.log(str,answer)


  return answer;
}

solution('JEROEN')
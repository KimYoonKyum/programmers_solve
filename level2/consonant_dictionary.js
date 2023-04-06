function solution(word) {
  let answer = 0;
  const com = ['A','E','I','O','U']
  let count = 0

  const makeWord = (initial) => {
    count++
    if(initial === word) {
      answer = count
    }
    for(let idx = 0; idx < com.length; idx++) {
      const newStr = `${initial}${com[idx]}`
      newStr.length < 6 && makeWord(newStr)
    }
  }

  const targetIdx = com.findIndex(c=>c===word[0])
  for(let idx = 0; idx <= targetIdx; idx++) {
    makeWord(com[idx])
  }

  console.log(answer)

  return answer;
}

solution("A")
solution("AAAAE")
solution("AAAE")
solution('I')
solution("EIO")
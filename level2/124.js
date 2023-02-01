function solution(n) {
  let answer = ''
  const arr = ['4','1','2']
  while(n>0) {
    const remainder = n % 3
    answer = arr[remainder]+answer
    if(remainder === 0){
      n = Math.floor((n-1)/3)
    }else{
      n = Math.floor(n/3)
    }
  }
  return answer;
}

function solution(n) {
  var answer = '';
  const oneTwoFour = ['4','1','2']
  while (n>0){
    const remainder = n % 3
    answer = oneTwoFour[remainder] + answer;
    if(remainder === 0){
      n = Math.floor((n-1)/3)
    }else{
      n = Math.floor(n/3)
    }
  }
  return answer;
}


solution(1)
solution(2)
solution(3)
solution(4)
solution(5)
solution(6)
solution(7)
solution(8)
solution(9)
solution(10)
solution(11)
solution(18)
solution(30)
solution(31)
solution(32)
solution(33)
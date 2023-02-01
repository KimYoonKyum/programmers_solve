function solution(n) {
  let answer = 0;
  let num = n
  let bit = []

  while(num >= 1){
    bit.push(num%3)
    num = parseInt(num/3)
  }

  bit.reverse();
  bit.forEach((b,idx)=>{
    answer += Math.pow(3,idx)*b
  })

  return answer;
}

solution(45)



function solution(n) {
  let rest = [];
  let quota = n;
  let res = 0;
  while (true) {
    if (quota < 3) {
      rest.unshift(quota);
      break;
    }
    rest.unshift(quota % 3);
    quota = Math.floor(quota / 3);
  }
  [...rest.join('')].forEach((v, i) => {
    res += Number(v) * (3**i);
  })
  return res;
}

console.log(solution(45));
console.log(solution(125));
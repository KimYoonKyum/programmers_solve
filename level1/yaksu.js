function solution(left, right) {
  let answer = 0;

  for(let num=left; num<=right; num++){
    let tempCount= 0;
    for(let y=1; y<=num/2;y++) {
      if(num%y ===0) tempCount++;
    }

    if(tempCount%2 === 1) answer += num;
    else answer -= num;
  }
  console.log(answer)
  return answer;
}

solution(13,17)
solution(24,27)

function solution2(left, right) {
  let answer = 0;
  let res = new Map();
  for (let i = left; i <= right; i++) {
    let arr = new Set();
    if (i === 1) {
      arr.add(i);
      res.set(i, arr);
      continue;
    }
    for (let k = 1; k <= Math.floor(i / 2); k++) {
      if (i % k === 0) {
        arr.add(k);
        arr.add(i / k);
      }
    }
    res.set(i, arr);
  }
  [...res.entries()].forEach(v => !(v[1].size % 2) ? answer += v[0] : answer -= v[0])
  return answer;
}

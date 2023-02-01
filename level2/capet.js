function solution(brown, yellow) {
  var answer = [];
  const yellow_horizontal = []

  if(yellow === 1) yellow_horizontal.push({y:1,x:1})
  else {
    for(let i=1; i <= Math.sqrt(yellow);i++) {
      if(yellow%i === 0) {
        yellow_horizontal.push({y:i,x:yellow/i})
      }
    }
  }

  for(let i=0; i < yellow_horizontal.length;i++) {

    const a = yellow_horizontal[i].x+2
    const b = yellow_horizontal[i].y+2

    if((a*b) === brown+yellow) {
      console.log(a,b)
      answer.push(a)
      answer.push(b)
    }
  }

  return answer;
}

solution(12,3)
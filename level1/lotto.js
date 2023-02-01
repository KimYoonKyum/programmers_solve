function solution(lottos, win) {
  let answer = [];
  let count = 0;
  let lucky = 0;
  const schema = {
    6:{lank:1},
    5:{lank:2},
    4:{lank:3},
    3:{lank:4},
    2:{lank:5},
    1:{lank:6},
    0:{lank:6}
  }
  lottos.forEach(l => {
    if(l === 0) lucky++;
    if(win.indexOf(l) !== -1) count++;
  })
  answer.push(schema[count+lucky].lank)
  answer.push(schema[count].lank)
  return answer;
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])
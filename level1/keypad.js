function solution(numbers, hand) {
  let answer = '';
  const schema = {
    "*":{x:1,y:1},
    "0":{x:2,y:1},
    "#":{x:3,y:1},
    "7":{x:1,y:2},
    "8":{x:2,y:2},
    "9":{x:3,y:2},
    "4":{x:1,y:3},
    "5":{x:2,y:3},
    "6":{x:3,y:3},
    "1":{x:1,y:4},
    "2":{x:2,y:4},
    "3":{x:3,y:4},
  }
  let left = {x:1,y:1}
  let right = {x:3,y:1}

  numbers.forEach(num=>{
    const n = String(num)
    if(n === "1" || n === "4" || n === "7" || n === "*") {
      answer += 'L';
      left = {...schema[n]};
    } else if(n === "3" || n === "6" || n === "9" || n === "#") {
      answer += 'R';
      right = {...schema[n]};
    } else {
      const distanceLeft = Math.abs(schema[n].x- left.x)+Math.abs(schema[n].y- left.y)
      const distanceRight = Math.abs(schema[n].x- right.x)+Math.abs(schema[n].y- right.y)
      if(distanceLeft > distanceRight) {
        right = {...schema[n]}
        answer += 'R';
      } else if(distanceLeft < distanceRight) {
        left = {...schema[n]};
        answer += 'L';
      } else {
        if(hand === "left") {
          left = {...schema[n]};
          answer += 'L';
        }
        else {
          right = {...schema[n]};
          answer += 'R';
        }
      }
    }
  })
  console.log(answer)
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")
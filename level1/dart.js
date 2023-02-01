function solution(dartResult) {
  const bonus = {
    'S':1,
    'D':2,
    'T':3
  }
  let answer = 0;
  let array = Array.from(dartResult)
  let scoreList = [];
  let optionList = ['','','']
  let currScoreIdx = -1;

  while(array.length !== 0) {
    const x = array.shift();
    if(!isNaN(Number(x))) {
      const y = array.shift()
      if(!isNaN(Number(y))) {
        const z = array.shift()
        scoreList.push(Math.pow(Number(x+y),bonus[z]))
      } else {
        scoreList.push(Math.pow(Number(x),bonus[y]))
      }
      currScoreIdx++;
    } else {
      optionList[currScoreIdx] = x
    }
  }
  optionList.forEach((o,idx)=>{
    if(o === '#') scoreList[idx] = scoreList[idx]*-1
    if(o === '*') {
      scoreList[idx] = scoreList[idx] * 2
      if(idx > 0) scoreList[idx-1] = scoreList[idx-1]*2
    }
  })

  console.log(scoreList)
  console.log(optionList)

  scoreList.forEach(score => {
    answer += score
  })

  return answer;
}

solution('1S2D*3T')
solution('1D2S#10S')
solution('1D2S0T')
solution('1S*2T*3S')
solution('1D#2S*3S')
solution('1T2D3D#')
solution('1D2S3T*')


function solution(dartResult) {
  const calc = [...dartResult].reduce((a, b) => {
    const n = a[a.length-1];
    const v1 = n;
    const v2 = b;

    if (Number.isInteger(Number(n)) && Number.isInteger(Number(b))) {
      a.splice(a.length-1, 1, String(v1) + String(v2));
    } else {
      a.push(v2);
    }
    return a;
  }, []);
  const res = [];
  let n = 0;
  calc.forEach((v, i) => {
    if (Number.isInteger(Number(v))) {
      if (i === 0) {
        res[n] = [];
        res[n].push(Number(v));
      } else {
        n++;
        res[n] = [];
        res[n].push(Number(v));
      }
    } else {
      if (v === "*") {
        i-2 !== 0 ? res[n - 1].push(v) : null;
        res[n].push(v);
      } else {
        res[n].push(v);
      }
    }
  })
  const res2 = res.map(v => {
    return v.reduce((a, b) => {
      return b === "S" ? a ** 1 : b === "D" ? a ** 2 : b === "T" ? a ** 3 : b === "*" ? a * 2 : b === "#" ? a * (-1) : a;
    })
  })
  return res2.reduce((a, b) => a + b);
}
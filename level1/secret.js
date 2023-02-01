function solution(n, arr1, arr2) {
  const setData = (array) => {
    let result = [];
    array.forEach((num,i)=>{
      let line = new Array(n);
      for(let idx=0;idx<n;idx++) {
        if(num >= 1) {
          line[idx] = num%2
          num = parseInt(num/2)
        } else {
          line[idx] = 0
        }
      }
      result[i]=line.reverse()
    })
    return result;
  }
  let answer  = setData(arr1);
  let second  = setData(arr2);

  for(let i=0;i<answer.length;i++){
    for(let j=0; j<answer[i].length;j++) {
      if(answer[i][j] === 1 || second[i][j] === 1) answer[i][j] = 1;
    }
  }

  let result = [];
  for(let i=0;i<answer.length;i++){
    let resultTxt = "";
    for(let j=0; j<answer[i].length;j++) {
      if(answer[i][j] === 1) resultTxt += "#";
      else resultTxt += " ";
    }
    result.push(resultTxt)
  }
  return result;
}

solution(	6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])

function solution(n, arr1, arr2) {
  const binary = arr1.map(v => Number(v).toString(2).padStart(n, '0'));
  const binary2 = arr2.map(v => Number(v).toString(2).padStart(n, '0'));
  const res = binary.map(function (v, i) {
    return [...v].map((val, index) => {
      const n = Number(val);
      const n2 = Number(this[i][index]);
      return n + n2 === 2 ? "#" : n + n2 === 1 ? "#" : " ";
    }).join('')
  }, binary2);
  return res;
}
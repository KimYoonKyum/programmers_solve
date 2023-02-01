function solution(N, number) {
  let answer = 9;

  const dp = new Array(N+1)
  dp[0]=[]
  dp[1]=[N]
  const set= new Set()
  set.add(Number(''+N+N))
  set.add(N+N)
  set.add(N-N)
  set.add(N*N)
  set.add(N/N)
  dp[2]=Array.from(set);

  for(let x=3;x<=8;x++){
    const set = new Set()
    let str = ''
    for(let t =0;t<x;t++) {
      str+=N
    }
    set.add(Number(str))

    for(let i=1;i<x;i++){
      for(let a of dp[x-i]) {
        for(let b of dp[i]) {
          set.add(a + b)
          set.add(a - b)
          set.add(a * b)
          set.add(b - a)
          if (b !== 0) set.add(a / b)
          if (a !== 0) set.add(b / a)
        }
      }
    }

    dp[x]=Array.from(set)
  }

  for(let i=1;i<dp.length;i++) {
    for(let j=0;j<dp[i].length;j++) {
      if(dp[i][j]===number) {
        if(answer > i) answer = i
      }
    }
  }
  if(answer === 9) answer = -1

  console.log(answer)

  return answer;
}

solution(5,9)
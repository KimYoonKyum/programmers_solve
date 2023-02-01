function solution(n, computers) {
  var answer = 0;


  function dfs(idx) {
    if(visited[idx]) return 0

    visited[idx]=true
    for(let j=0;j<n;j++) {
      if(!visited[j]) {
        console.log(idx,j,'방문')
        if(computers[idx][j]===1) dfs(j)
      }
    }
    return 1
  }


  const visited = new Array(n).fill(false)
  for(let i=0;i<n;i++) {
    if(!visited[i]) {
      answer+=dfs(i)
    }
  }

  console.log(answer)

  return answer;
}

solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]])
// solution(3,[[1, 1, 0], [1, 1, 1], [0, 1, 1]])
// solution(4,[[1,1,0,0],[1,1,1,0],[1,0,1,0],[0,0,0,1]])

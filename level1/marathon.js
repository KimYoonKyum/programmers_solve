function solution(p, c) {
  let convert = {}

  for(let pa of p){
    convert[pa] = convert[pa] ? convert[pa]+1 : 1
  }

  // for(let pa of p){
  //   convert[pa] +=1
  // }

  for(let com of c){
    convert[com] -= 1
  }

  for(let co in convert) {
    if(convert[co] === 1) {
     return co
    }
  }
}

solution(	["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
solution(		["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
solution(			["leo", "kiki", "eden"], ["eden", "kiki"])
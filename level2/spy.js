function solution(clothes) {
  let answer = 0;
  const hash ={}
  clothes.forEach(c=>{
    hash[c[1]] = hash[c[1]] ? [...hash[c[1]],c[0]] : [c[0]]
    answer++;
  })

  let mux = 1;
  Object.keys(hash).forEach(h=>{
      mux = mux*(hash[h].length+1)
  })

  console.log(hash,mux-1)
  return mux-1;
}

// solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])
// solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])
// solution([["a","1"],["b","2"]])
solution([["a","1"],["b","2"],["c","3"]])
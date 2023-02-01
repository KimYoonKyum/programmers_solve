function solution(students) {
  const data = students.map((stu,index) => {
    let a=0;
    let l=0;
    let p=0;
    let cut = false;
    let i=0;
    while(!cut && i<10) {
      if(stu.charAt(i) === 'A') a++;
      else if(stu.charAt(i) === 'P') {
        p++;
        if(p===3) {
          cut = true;
          break;
        }
      }
      else {
        l++;
        if((l===6)||((Math.floor(l/2)+p>=3))) {
          cut = true;
          break;
        }
      }
      i++;
    }
    return cut ? {name:index+1,score:0} : {name:index+1,score:a-(Math.floor(l/2))-p}
  })

  console.log(data.sort((a,b)=>{
    return b.score - a.score
  }).map(stu=>stu.name))

  return data.sort((a,b)=>{
    return b.score - a.score
  }).map(stu=>stu.name);
}

solution(["AAALLLAPAA", "AAAAAAAPPP", "ALAAAAPAAA"]	)
solution(["ALALLAAPAA", "ALLLAAAPAA", "APAPALLAAA"])
// solution(["LLAPPPPPPP", "ALLLAAAPAA", "APAPALLAAA"])


function solution(students) {
  let answer = [];


  const data = students.map((stu,index) => {
    let a=0;
    let l=0;
    let p=0;
    let score = 0;
    for(let i=0; i<10;i++) {
      if(stu.charAt(i) === 'A') {
        a++;
      } else if(stu.charAt(i) === 'P') {
        p++;
      } else {
        l++;
      }
    }
    if(l >= 6) return {name:index+1,score:0}
    if(p>=3) return {name:index+1,score:0}
    if(Math.floor(l/2)+p >=3) return{name:index+1,score:0}
    return{name:index+1,score:a- (Math.floor(l/2))-p}
  })

  answer = data.sort((a,b)=>{
    if(a.score > b.score) return -1
    if(a.score < b.score) return 1
    return 0
  }).map(stu=>stu.name)


  console.log(data)

  return answer;
}
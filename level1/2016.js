function solution(a, b) {
  let answer = '';

  let date = new Date(2016,a-1,b+1)
  console.log(date.getDay())
  switch(date.getDay()) {
    case 7: return "SAT"
    case 1: return "SUN"
    case 2: return "MON"
    case 3: return "TUE"
    case 4: return "WED"
    case 5: return "THU"
    case 6: return "FRI"
  }
}

solution(1,1)
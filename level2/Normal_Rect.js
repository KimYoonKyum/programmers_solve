function solution(w, h) {
  let answer = 1;
  return answer;
}

//w==h
solution(1,1) //0 w^2-h
solution(2,2) //2 w^2-h
solution(3,3) //6 w^2 -h
solution(4,4) //12
solution(5,5) //20

//w>h
solution(1,2) //0 w==1 =>0
solution(1,3) //0
solution(2,3) //2
solution(2,4) //4
solution(2,5) //4
solution(3,2) //2
solution(4,2) //2
solution(4,3) //6
solution(5,3) //8


function solution(absolutes, signs) {
 let result = 0;

 absolutes.forEach((a,idx)=>{
   result += ((signs[idx] ? 1 : -1) * a)
 })

  console.log(result)

 return result;
}

solution([4,7,12],[true,false,true])
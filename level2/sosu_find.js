function solution(numbers) {
  let result =new Set()

  function sum(target,arr,index,digit) {
    const source = [...arr]
    if(digit === 1) {
      result.add(Number(arr[index]))
    }
    if(target&&target.length === digit-1) {
      result.add(Number(target+arr[index]))
      return;
    }

    let str = target+source[index]
    source.splice(index,1)
    for(let i=0; i<source.length;i++){
      const tempArr = [...source]
      sum(str,tempArr,i,digit)
    }
  }

  for(let digit=1;digit<=numbers.length;digit++) {
    for(let i=0;i<numbers.length;i++){
      sum('',numbers,i,digit)
    }
  }

  const sosu = [...result]

  const newAnswer = sosu.filter(r => isPrime(r))
  console.log(newAnswer)


  return newAnswer.length;
}

function isPrime(num) {
  let count = 0;
  if(num === 0 || num === 1) return false;
  for(let i=2;i <= Math.sqrt(num);i++) {
    if(num%i === 0) {
      console.log(num,i)
      count++
    }
  }
  return count === 0
}

solution([0,1,1])

// function solution(numbers) {
//   let result =new Set()
//
//   function sum(target,arr,index,digit) {
//     const source = [...arr]
//     if(digit === 1) {
//       result.add(Number(arr[index]))
//     }
//     if(target&&target.length === digit-1) {
//       result.add(Number(target+arr[index]))
//       return;
//     }
//
//     let str = target+source[index]
//     source.splice(index,1)
//     for(let i=0; i<source.length;i++){
//       const tempArr = [...source]
//       sum(str,tempArr,i,digit)
//     }
//   }
//
//   for(let digit=1;digit<=numbers.length;digit++) {
//     for(let i=0;i<numbers.length;i++){
//       sum('',numbers,i,digit)
//     }
//   }
//
//   const sosu = [...result]
//
//   const newAnswer = sosu.filter(r => {
//     let count = 0;
//     for(let i=1;i<=r;i++) {
//       if(r%i === 0) {
//         count++
//       }
//     }
//     return count === 2
//   })
//   console.log(newAnswer)
//
//
//   return newAnswer.length;
// }

// function solution(arr1,arr2){
//   let answer = 0;
//   let source = [];
//   arr1.forEach(first => {
//     if(first[0] === ')') return;
//     arr2.forEach(second => source.push((first+second).split('')))
//   })
//
//   source.forEach((s,index)=>{
//     let str = []
//     while(s.length>0) {
//       const txt = s.shift()
//       if(str.length === 0) {
//         // if(txt === ')') return
//         str.push(txt)
//       } else if(str[str.length-1] === txt) {
//         str.push(txt)
//       } else {
//         str.pop()
//       }
//     }
//     str.length === 0 && answer++
//   })
//   return answer;
// }

function solution(arr1,arr2){
  let answer = 0;
  let source = [];
  let fArr = arr1.filter(a => a.charAt(0) !== ')')
  let sArr = arr2.filter(a => a.substr(-1) !== '(')
  fArr.forEach(first => {
    sArr.forEach(second => {
      source.push((first + second).split(''))
    })
  })
  console.log(source,source.length)
  source.forEach((s,index)=>{
    let str = []
    while(s.length>0) {
      const txt = s.shift()
      if(str.length === 0) {
        str.push(txt)
      } else if(str[str.length-1] === txt) {
        str.push(txt)
      } else {
        str.pop()
      }
    }
    str.length === 0 && answer++
    console.log(str,str.length===0 ?index : -1)
  })
  console.log(answer)
  return answer;
}

solution(['()','(()',')()','()'],[')()','()','(()'])
solution(['()','(()','(','(())'],[')()','()','(())',')()'])
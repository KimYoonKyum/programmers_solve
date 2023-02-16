function solution(inputPiro, dungeons) {
  let answer = -1;
  let count = 0;
  let countList = []

  const search = (dungeons,piro,count) => {
    if(dungeons.length < 1) {
      countList.push(count)
      return
    }

    for(let idx = 0; idx < dungeons.length; idx++) {
      if(piro < dungeons[idx][0]) {
        countList.push(count)
        continue;
      }
      let remainPiro = piro - dungeons[idx][1]
      let newDungeons = dungeons.slice()
      newDungeons.splice(idx,1);
      search(newDungeons,remainPiro,count + 1)
    }
  }

  for(let idx=0; idx< dungeons.length; idx++) {
    let remainPiro = inputPiro - dungeons[idx][1]
    if(remainPiro < 0) {
      countList.push(0)
      continue;
    }
    let newDungeons = dungeons.slice()
    newDungeons.splice(idx,1);
    search(newDungeons,remainPiro,1)
  }

  countList.sort((p,n) => n-p)
  console.log(countList)


  return countList[0];
}
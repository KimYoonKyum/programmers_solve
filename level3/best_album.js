function solution(genres, plays) {
  const originList = {}
  genres.forEach((g,idx)=> {
    if(!originList[g]) originList[g] = {max: 0, list: []}
    originList[g].list.push({genre: g, play: plays[idx], id: idx})
    originList[g].max = originList[g].max += plays[idx]
  })

  const result = []
  Object.keys(originList).forEach(key=>{
    const {max, list} = originList[key]
    list.sort((pre,next) => next.play - pre.play)
    originList[key].list = [
      {...list[0],max},
      {...list[1],max},
    ]
    result.push({...list[0],max})
    if(list.length > 1) result.push({...list[1],max})
  })

  result.sort((pre,next) => next.max - pre.max)

  return result.map(album=>album.id)
}

solution(["classic", "pop", "classic", "classic", "pop"],	[500, 600, 150, 800, 2500]	)
solution(["pop", "pop", "pop", "rap", "rap"],[45, 50, 40, 60, 70])
solution(["classic", "pop", "classic", "classic"], [800, 600, 150, 800])
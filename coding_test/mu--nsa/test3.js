function solution(consume, cardList) {
  const user = {};
  consume.forEach(con=>{
    const type = con.split(' ')[0];
    const value = Number(con.split(' ')[1]);
    user[type] = (user[type]||0) + value;
  })

  const cardInfo = [];
  cardList.forEach((card,index)=>{
    let info = {
      card:index+1,
    };
    card.forEach(rawData=>{
      const type = rawData.split(' ')[0];
      const dis = Number(rawData.split(' ')[1])/100;
      const max = Number(rawData.split(' ')[2]);
      info = {
        ...info,
        [type]: {dis, max}
      };
    })
    cardInfo.push(info);
  })

  const result = cardInfo.map(card=>{
    let total = 0;
    for(const cType in user) {
      if(card[cType]) {
        const discount = user[cType]*card[cType].dis
        const max = card[cType].max
        total += discount > max ? max : discount;
      }
    }
    return {card:card.card,total:total};
  }).sort((a,b)=>{
    return b.total - a.total
  })

  return result[0].total === 0 ? -1 : result[0].card;
}

solution(
  ["public_transport 10000", "public_transport 10000", "shopping 377000", "food 16000", "public_transport 2000"],
[["food 5 30000", "convenience_store 20 10000", "public_transport 15 2000"],["food 5 30000", "shopping 10 15000", "movie 7 5000"]]
)

// solution(
//   ["movie 10000"],
//   [["movie 100 5000"],["movie 50 5000"],["movie 10 5000"]]
// )
//
// solution(
//   ["convenience_store 10000"],
//   [["movie 100 5000"],["movie 50 5000"]]
// )

function solution(consume, cards) {
  let answer = 0;

  const user = {}
  consume.forEach(con=>{
    user[con.split(' ')[0]] = Number(user[con.split(' ')[0]]||0)+Number(con.split(' ')[1])
  })
  console.log(user)

  const cardInfo = []
  cards.forEach((card,index)=>{
    let arr = {
      card:index+1,
    }
    card.forEach(info=>{
      arr = {
        ...arr,
        [info.split(' ')[0]]: {
          dis:Number(info.split(' ')[1])/100,
          max:Number(info.split(' ')[2])
        }
      }
    })
    cardInfo.push(arr)
  })

  const result = cardInfo.map((card,index)=>{
    // console.log(card.card,'번 카드')
    let total = 0
    for(const u in user) {
      if(card[u]) total += user[u]*card[u].dis > card[u].max ?  card[u].max : user[u]*card[u].dis
    }
    // console.log(total)
    return {card:card.card,total:total};
  })

  result.sort((a,b)=>{
    if(a.total > b.total) return -1
    if(a.total < b.total) return 1
    return 0
  })

  console.log(result)
  return result[0].total === 0 ? -1 : result[0].card




  // return answer;
}
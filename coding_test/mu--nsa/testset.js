function solution(consume, cards) {
  const user = {};
  consume.forEach(con=>{
    const type = con.split(' ')[0];
    const value = Number(con.split(' ')[1]);
    user[type] = (user[type]||0) + value;
  })

  const cardInfo = [];
  cards.forEach((card,index)=>{
    let arr = {
      card:index+1,
    };
    card.forEach(info=>{
      arr = {
        ...arr,
        [info.split(' ')[0]]: {
          dis:Number(info.split(' ')[1])/100,
          max:Number(info.split(' ')[2])
        }
      };
    })
    cardInfo.push(arr);
  })

  const result = cardInfo.map(card=>{
    let total = 0;
    for(const u in user) {
      if(card[u]) total += user[u]*card[u].dis > card[u].max ?  card[u].max : user[u]*card[u].dis;
    }
    return {card:card.card,total:total};
  }).sort((a,b)=>{
    if(a.total > b.total) return -1;
    if(a.total < b.total) return 1;
    return 0;
  })

  return result[0].total === 0 ? -1 : result[0].card;
}
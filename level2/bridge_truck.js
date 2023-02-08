function solution(bridgeLength, weight, truckWeights) {
  let count = 0;
  let result = []
  let bridge = []
  const LENGTH = truckWeights.length
  const outTime = bridgeLength

  //1대가 빠져나가는데는 bridge_length + 1 초
  if(LENGTH === 1) return bridgeLength + 1

  const status = truckWeights.map(t=>{
    return {weight: t, time:0}
  })

  while(result.length !== LENGTH) {
    bridge.forEach(b=>{b.time = b.time +1})
    if(bridge.length === 0) {
      bridge.push(status.shift())
    } else {
      if(status.length === 0) {
        if(bridge[0].time === outTime) result.push(bridge.shift())
        count++
        continue;
      }

      if(bridge[0].time === outTime) result.push(bridge.shift())
      let sum = bridge.reduce((acc,curr)=>{return acc+curr.weight},0)
      if(weight - sum >= status[0].weight) bridge.push(status.shift())
    }
    count++
  }

  return count;
}

solution(2,	10,	[7,4,5,6])
solution(100,	100,	[10,10,10,10,10,10,10,10,10,10])


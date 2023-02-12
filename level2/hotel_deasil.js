function solution(input) {
  const getPlus10Time = (time) => {
    const timeParseList = String(time).split('')
    const len = timeParseList.length
    let hour = 0
    let min = 0
    if(len < 3) {
      hour = 0
      min = Number(timeParseList[len-2]) * 10 + Number(timeParseList[len-1])
    }else {
      hour = len < 4 ? (Number(timeParseList[0])) : (Number(timeParseList[0])*10 + Number(timeParseList[1]))
      min = Number(timeParseList[len-2]) * 10 + Number(timeParseList[len-1])
    }

    if(min < 50) {
      return time + 10
    } else {
      const remain = (min + 10) - 60
      const newHour = (hour+1) * 100
      return newHour + remain
    }
  }

  const info = input.map((timeInfo)=>{
    const startHour = timeInfo[0].split(':')[0]
    const startMin = timeInfo[0].split(':')[1]
    const endHour = timeInfo[1].split(':')[0]
    const endMin = timeInfo[1].split(':')[1]
    const start = Number(startHour) * 100 + Number(startMin)
    const end = Number(endHour) * 100 + Number(endMin)

    return {start, end}
  }).sort((pre,next) => pre.start - next.start)

  let result = []
  result.push({num: '1', list:[{...info.shift()}]})

  while(info.length > 0) {
    const currInfo = info.shift()
    const availableRoom = result.find(roomInfo=> getPlus10Time(roomInfo.list[roomInfo.list.length-1].end) <= currInfo.start)
    if(availableRoom) {
      availableRoom.list.push(currInfo)
    } else {
      result.push({num: `${result.length+1}`,list:[currInfo]})
    }
  }
  return result.length
}

// getPlus10Time(1549)
// getPlus10Time(50)
// getPlus10Time(759)
// getPlus10Time(1550)
// getPlus10Time(1551)
// getPlus10Time(1559)

// solution([["15:00", "18:20"], ["15:00", "18:20"], ["15:00", "15:20"], ["14:10", "19:20"], ["15:00", "21:20"]])
// solution([["00:00", "00:10"], ["00:20", "00:30"]])
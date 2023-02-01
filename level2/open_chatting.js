function solution(record) {
  const answer = [];
  const infoMap = new Map();
  const statusEnum ={
    'Enter':'들어왔습니다.',
    'Leave':'나갔습니다.',
  }
  record.forEach(info=>{
    const tempInfo = info.split(' ');
    const status = tempInfo[0];
    const id = tempInfo[1];
    const nick = tempInfo[2]||''
    if(status !== 'Leave') {
      infoMap.set(id,nick)
    }
  })
  record.forEach(info=>{
    const tempInfo = info.split(' ');
    const status = tempInfo[0];
    const id = tempInfo[1];
    if(status !== 'Change') {
      answer.push(`${infoMap.get(id)}님이 ${statusEnum[status]}`)
    }
  })
  console.log(answer)
  return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])

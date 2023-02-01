function solution(s) {
  const length = s.length
  const idx = length/2
  return s.substring(length % 2 ? Math.ceil(idx)-1 : idx-1,idx+1)

}
solution('abcde')
solution('qwer')
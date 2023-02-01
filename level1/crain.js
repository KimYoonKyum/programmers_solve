function solution(board, moves) {
  const X = board.length - 1;
  const basket = [];
  let basketIdx = 0;
  let answer = 0;

  moves.forEach(m=>{
    for(let j = 0; j <= X; j++) {
      if(board[j][m-1] !== 0) {
        setBasket(board[j][m-1])
        board[j][m-1] = 0
        break;
      }
    }
  })

  function setBasket(value) {
    if(basketIdx === 0) {
      basket.push(value)
      basketIdx++;
      return;
    }

    if(basket[basketIdx-1] === value) {
      basket.splice(basketIdx-1,1)
      answer = answer + 2;
      basketIdx--;
    } else {
      basket.push(value)
      basketIdx++;
    }
  }

  console.log(basket)
  console.log(answer)

  return answer;
}

solution(	[[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1,4,2,2]);
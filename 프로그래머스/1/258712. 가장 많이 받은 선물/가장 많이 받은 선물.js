function solution(friends, gifts) {
  const mapping = {}
  const length = friends.length
  const matrix = Array.from({length}, () => Array(length).fill(0));
  const nextMonthCount = Array(length).fill(0)
  const giveCount = Array(length).fill(0)
  const takeCount = Array(length).fill(0)

  friends.forEach((friend,i) => {
    mapping[friend] = i;
  })

  gifts.forEach((gift) => {
    const [giver, taker] = gift.split(" ");
    const giveIdx = mapping[giver];
    const takeIdx = mapping[taker];

    matrix[giveIdx][takeIdx]++;
    giveCount[giveIdx]++
    takeCount[takeIdx]++
  })

  const giftIndices = giveCount.map((give,i) => give - takeCount[i])

  for(let i = 0; i < length; i++) {
    for(let j = i+1; j < length; j++) {
      if(matrix[i][j] > matrix[j][i]) {
        nextMonthCount[i]++
      } else if (matrix[j][i] > matrix[i][j]) {
        nextMonthCount[j]++
      } else {
        if(giftIndices[i] > giftIndices[j]) {
          nextMonthCount[i]++;
        } else if(giftIndices[j] > giftIndices[i]) {
          nextMonthCount[j]++;
        }
      }
    }
  }
  return Math.max(...nextMonthCount)
}
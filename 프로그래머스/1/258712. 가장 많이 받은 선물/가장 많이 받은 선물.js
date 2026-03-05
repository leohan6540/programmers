function solution(friends, gifts) {
    const mapping = {};
    const n = friends.length
    const matrix = Array.from({length:n}, () => Array(n).fill(0));
    const gaveCount = Array(n).fill(0);
    const receivedCount = Array(n).fill(0);
    const nextMonthCount = Array(n).fill(0);
    
    friends.forEach((friend,i) => {
        mapping[friend] = i
    })
    gifts.forEach((gift) => {
        const [a,b] = gift.split(" ");
        const giveIdx = mapping[a];
        const takeIdx = mapping[b];
        
        gaveCount[giveIdx]++;
        receivedCount[takeIdx]++;
        matrix[giveIdx][takeIdx]++;
    })
    const giftIndices = gaveCount.map((gave,i)=> {
        return gave - receivedCount[i];
    })

    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            if(matrix[i][j] > matrix[j][i]) {
                nextMonthCount[i]++
            } else if (matrix[i][j] < matrix[j][i]) {
                nextMonthCount[j]++
            } else {
                if(giftIndices[i] > giftIndices[j]) {
                    nextMonthCount[i]++
                } else if (giftIndices[i] < giftIndices[j]) {
                    nextMonthCount[j]++
                }
            }
        }
    }
    return Math.max(...nextMonthCount);
}
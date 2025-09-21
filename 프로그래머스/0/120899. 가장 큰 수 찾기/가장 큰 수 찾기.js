function solution(array) {
    let high = [0,0];

    for(let i = 0; i < array.length; i++) {
        if(array[i] > high[0]) {
            high = [array[i], i]
        }
        if(array.length === 1) {
            return [array[0], 0]
        }
    }
    return high
}
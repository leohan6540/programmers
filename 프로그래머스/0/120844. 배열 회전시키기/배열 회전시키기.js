function solution(numbers, direction) {
    if(direction === "right") {
       let container = numbers[numbers.length-1]; 
        for(let i = numbers.length-1; i > 0; i--) {
            numbers[i] = numbers[i-1] 
        }
           numbers[0] = container;
    } else {
        let container = numbers[0]; 
        for(let i = 0; i < numbers.length-1; i++) {
            numbers[i] = numbers[i+1] 
        }
           numbers[numbers.length-1] = container;
    }
    return numbers;
}
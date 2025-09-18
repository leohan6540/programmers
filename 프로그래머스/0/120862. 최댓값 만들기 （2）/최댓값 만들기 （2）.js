function solution(numbers) {
    let sum = -100000000000000000000000;
    numbers.forEach((n, i) => {
        numbers.forEach((k, ii) => {
            if(i !== ii && sum < n*k ) {
                sum = n * k
            }
        })
    })
    return sum;
}
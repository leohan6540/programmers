// function solution(numbers) {
//     let sum=0;
//     for(let num of numbers) {
//         sum += num;
//     }
//     let answer = (sum/numbers.length) % 0.5 === 0 ? sum/numbers.length : Math.floor(sum/numbers.length);
//     return answer;
// }

function solution(numbers) {
    return numbers.reduce((a,b) => a +=b,0)/ numbers.length
}
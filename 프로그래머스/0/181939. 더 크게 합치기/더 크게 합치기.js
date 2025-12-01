function solution(a, b) {
    const num1 = a+""+b+"";
    const num2 = `${b}${a}`;
    return parseInt(num1) >= parseInt(num2)?parseInt(num1):+(num2);
}
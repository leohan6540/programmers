function solution(n) {
    const pizzaCount = n % 7 === 0 ? n / 7: Math.ceil(n/7);
    return pizzaCount;
}
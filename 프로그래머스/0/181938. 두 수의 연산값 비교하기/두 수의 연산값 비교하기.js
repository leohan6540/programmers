function solution(a, b) {
    if(Number(String(a)+String(b)) >= 2*a*b) {
        return Number(String(a)+String(b))
    } else {
        return  2*a*b
    }
}
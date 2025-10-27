function solution(age) {
    return Array.from(age.toString()).map(a => String.fromCharCode(Number(a)+97)).join("")
}
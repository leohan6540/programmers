function solution(hp) {
    const hp1 = Math.floor(hp / 5);
    const hp2 = Math.floor(hp % 5 / 3);
    const hp3 = Math.floor(hp % 5 % 3 / 1);
    var answer = 0;
    return hp1+hp2+hp3;
}
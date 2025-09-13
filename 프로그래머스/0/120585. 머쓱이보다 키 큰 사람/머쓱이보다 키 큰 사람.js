function solution(array, height) {
    let sum =0;
    array.forEach(a => {if(a > height) {
        sum++;
    }});
    return sum;
}
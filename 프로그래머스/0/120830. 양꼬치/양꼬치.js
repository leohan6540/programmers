function solution(n, k) {
    let drink = k-(Math.floor(n/10));
     if(n>=10 && drink>=0 ) {
        return n*12000+(drink)*2000;
    }
return n*12000+k*2000;
}
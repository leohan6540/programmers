function solution(n) {
    for(i = 1; i <= 100; i++) {
        if(n < 4) {
            return 1;
        }
        if(n*i % 6 ===0) {
            return n * i / 6;
        }
    }
    
}
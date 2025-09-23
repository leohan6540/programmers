function solution(n) {
    //i는 인당 먹어야 하는 조각수
    for(i = 1; i <= 100; i++) {
        if(n < 4) {
            return 1;
        }else if (n * i % 6 ===0) {
            return n * i / 6;
        }
    }
    
}
function solution(my_string) {
    //return Array.from(my_string).filter(v => +(v)).map(v=> (v));
    return Array.from(my_string).map(v=> +v && +v).filter(a=> !isNaN(a)).sort((a,b) => a-b);

    
}
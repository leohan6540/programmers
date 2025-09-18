function solution(my_string) {
    
    return Array.from(my_string).filter(v => +v).reduce((acc,cur)=> acc+Number(cur),0)
}
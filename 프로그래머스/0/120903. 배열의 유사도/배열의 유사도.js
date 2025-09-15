function solution(s1, s2) {
    let sum = 0;
    s1.forEach(e1 => {
        s2.forEach(e2 => 
            e1 === e2 ? sum++: ""
        )
    })
    return sum;
}
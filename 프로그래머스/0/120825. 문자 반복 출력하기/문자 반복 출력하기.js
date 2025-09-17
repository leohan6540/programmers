function solution(my_string, n) {
    const hi = my_string.split("").map(w => {
        let sum ="";
        for(let i = 0; i<n; i++) {
            sum= sum +w;
        }
        return  sum;
    }).join("");
    return hi;
}
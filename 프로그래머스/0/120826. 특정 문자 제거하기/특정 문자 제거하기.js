function solution(my_string, letter) {
    return [...my_string].map(w => w === letter?"":w).join("");
    
}
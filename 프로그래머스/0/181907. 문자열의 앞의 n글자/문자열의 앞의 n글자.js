function solution(my_string, n) {
    var answer = '';
    return my_string.split("").map((s,index) => {if(index < n) {
        return s
    }}).join("");
}
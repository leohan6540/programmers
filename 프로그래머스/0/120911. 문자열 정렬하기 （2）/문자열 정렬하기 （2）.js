function solution(my_string) {
    const lower = my_string.toLowerCase().split("").sort().join("");
    return lower;
}
function solution(my_string, target) {
    const n = target.length;
    for(let i = 0; i < my_string.length; i++) {
        let newString = my_string.slice(i, i+n);
        if(newString === target) {
            return 1;
        }
    }
    return 0;
}
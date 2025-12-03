function solution(t, p) {
    let count = 0;
    for(let i =0; i<t.length; i++) {
        const p_length = p.length;
        const temp_num = t.slice(i,p_length+i);
        parseInt(temp_num) <= parseInt(p) && temp_num.length>=p_length && count++;
    }
    return count;
}
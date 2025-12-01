function solution(myString, pat) {
    return [...myString].map(a => a==="A"?"B":"A").join("").includes(pat)===true?1:0;
}
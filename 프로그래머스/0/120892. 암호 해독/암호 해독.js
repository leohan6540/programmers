function solution(cipher, code) {
    const arr =  cipher.split("");
    let newArr = [];
    for(let i = code-1; i < arr.length; i = i + code ) {
        newArr.push(arr[i])
        
    }
    return newArr.join("")
}
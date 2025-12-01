function solution(myString) {
    var answer = '';
    return myString.split('').map(a => "l">a?"l":a).join("");
}
function solution(my_string) {
    var strArr = my_string.split('');
    
    return strArr.sort((a,b) => -1).join('');
}
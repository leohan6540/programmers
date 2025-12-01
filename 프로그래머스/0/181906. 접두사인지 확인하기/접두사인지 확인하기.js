function solution(my_string, is_prefix) {
   
    return my_string.indexOf(is_prefix,0)===-1?0: my_string.slice(0,is_prefix.length) === is_prefix ?1:0;
}
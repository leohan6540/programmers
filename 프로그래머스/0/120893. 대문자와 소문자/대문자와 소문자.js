function solution(my_string) {
   return  my_string.split("").map(a => {
       
        if(/[a-z]/.test(a)) {
            return a.toUpperCase();
        } else {
            return a.toLowerCase()
        }
    }).join("");
}
function solution(num_list) {
       let even =0;
        let odd =0;
        num_list.forEach((item,index) => {
            if(index%2 === 0) {
                even = even + item;
            } else {
                odd = odd + item;
            }
         });
    
        if(odd > even)  { 
             return odd
        } else {
             return even
        }
}
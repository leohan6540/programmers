function solution(n_str) {
    
    return [...n_str].map((item,index) => item==="0"? Number(n_str.slice(0,index+1))===0 ?"": item :item).join("");
}
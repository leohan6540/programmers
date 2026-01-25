const obj = {
    mode: false,
    ret: "",
}

function solution(code) {
     [...code].map((c,idx) => {
        if(c === "1") {
            obj.mode = !obj.mode;
            return;
        }
         
        if(Number(obj.mode) === 0 && idx % 2 === 0) {
            obj.ret = obj.ret + c;
        } else if(Number(obj.mode) === 1 && idx % 2 === 1) {
            obj.ret = obj.ret + c;
        } 
    })
    return obj.ret === "" ? "EMPTY" : obj.ret;
}
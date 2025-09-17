function solution(my_string) {
    return my_string.split("").map(w => {
        switch(w) {
            case "a":
                return "";
            case "e":
                return "";
            case "i":
                return "";
            case "o":
                return "";
            case "u":
                return "";
            default:
                return w;
    }}).join("")
}
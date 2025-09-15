// function solution(dot) {
//     if(dot[0] > 0 && dot[1] > 0) return 1;
//     if(dot[0] > 0 && dot[1] < 0) return 4;
//     if(dot[0] < 0 && dot[1] > 0) return 2;
//     if(dot[0] < 0 && dot[1] < 0) return 3;
//     var answer = dot;
//     return answer;
// }

function solution(dot) {
	const [num1, num2] = dot;
	const check = num1 * num2 > 0;
	return check ? (num1>0 ? 1 : 3) : (num1<0 ? 2 : 4)
}






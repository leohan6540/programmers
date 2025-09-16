const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const n = Number(line);
    let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            result += '*'; // 별을 문자열에 추가
        }
        result += '\n'; // 한 줄이 끝나면 줄바꿈 추가
    }
        console.log(result);

}).on('close', function () {
});
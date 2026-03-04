function timeToSecond(time) {
    const [min, sec] = time.split(":").map(Number);
    return min * 60 + sec;
}

function timeToString(time) {
    const min = String(Math.floor(time/60)).padStart(2,0);
    const sec = String(Math.floor(time%60)).padStart(2,0);
    return `${min}:${sec}`
    
}

function solution(video_len, pos, op_start, op_end, commands) {
    let currentSec = timeToSecond(pos);
    const startSec = timeToSecond(op_start);
    const endSec = timeToSecond(op_end);
    const videoLenSec = timeToSecond(video_len)
    
    let currentPos = currentSec >= startSec && endSec >= currentSec
        ? currentSec = endSec
        : currentSec;
    
    commands.forEach((command) => {
        command === "next" ? currentPos += 10 : currentPos -= 10;
        currentPos = Math.max(0, currentPos)
        currentPos = Math.min(currentPos, videoLenSec)
        if(currentPos >= startSec && endSec >= currentPos) {
            currentPos = endSec;    
        }
    })
    return timeToString(currentPos)
}
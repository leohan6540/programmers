function toSec (time) {
	const [min, sec] = time.split(":").map(Number);
	return 60 * min + sec
}

function toStr (time) {
	const min = String(Math.floor(time / 60)).padStart(2, "0")
	const sec = String(Math.floor(time % 60)).padStart(2, "0");
	return `${min}:${sec}`
}

function solution (video_len, pos, op_start, op_end, commands) {
	let curSec = toSec(pos);
	let vidSec = toSec(video_len);
	let startSec = toSec(op_start);
	let endSec = toSec(op_end);

	const skipOp = (time) => time >= startSec && endSec >= time ? endSec : time;
	curSec= skipOp(curSec)

	commands.forEach((command) => {
		curSec += (command === "next" ? 10 : -10);
		curSec = Math.max(0, Math.min(vidSec, curSec));
		curSec = skipOp(curSec);
	})
	return toStr(curSec)
}



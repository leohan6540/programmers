function solution (n, w, num) {
	const rowTop = Math.floor((n-1)/w);
	const rowNum = Math.floor((num-1)/w);
	const columnNum = rowNum % 2 === 0 ? (num-1) % w : w - 1 - (num -1) % w

	let targetSpot;
	if(rowTop % 2 === 0) {
		targetSpot = rowTop * w + columnNum + 1
	} else {
		targetSpot = rowTop * w + w - 1 - columnNum + 1
	}

	if(targetSpot > n) {
		return rowTop - rowNum
	} else {
		return rowTop - rowNum + 1
	}
}	
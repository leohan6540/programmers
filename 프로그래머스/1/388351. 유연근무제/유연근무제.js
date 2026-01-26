function solution(schedules, timelogs, startday) {
    let result = 0
    for(let i=0; i<schedules.length; i++) {
        let semi_result = true
        let time = (schedules[i]+10) % 100 > 59 ? schedules[i]+ 50: schedules[i] + 10
        for(let j=0; j<7; j++) {
            if(time < timelogs[i][j] && startday != 7 && startday !=6) {
                semi_result = false
            }
            if(j===6 && semi_result === true) {
                ++result
            }
            startday === 7 ? startday = 1 : ++startday;
        }
    }
    return result;
}
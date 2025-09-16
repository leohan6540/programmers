function solution(spell, dic) {
    const newDic = dic.map(word => {
        let sum = 0;
        spell.forEach(sp => {
            for(let i = 0; i < word.length; i++) {
                if(word[i] === sp) {
                    sum++;
                    break;
                }
            }
        })
        return sum;
    });
    for(let j = 0; j < newDic.length; j++) {
        if(newDic[j] === spell.length) {
            return 1;
        }
    }
    return 2;
}
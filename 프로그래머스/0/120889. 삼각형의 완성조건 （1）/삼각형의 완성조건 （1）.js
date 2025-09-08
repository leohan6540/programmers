function solution(sides) {
    for(let i = 0; i <= sides.length; i++ ) {
        if(sides[i]>sides[i+1]) {
            let key = sides[i];
            sides[i] = sides[i+1];
            sides[i+1] = key;
        }
    }
    console.log(sides);
        if(sides[0] +sides[1] > sides[2]) {
            return 1;
        }    return 2;

    }

   
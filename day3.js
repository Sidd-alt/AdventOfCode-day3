const fs = require('fs').readFileSync('input.txt','utf8')
const landField = fs.split(/\n/)

// // ************PART ONE*************

day3code1=()=>{
    let right = 3;
    let down = 1;
    let countTrees = 0;
    for(let i=1; i<landField.length; i+=down){
        if((landField[i][right])==="#") countTrees++;
        right=(right+3)%31;
    }
   return countTrees
}
console.log(day3code1(landField))

// ************PART TWO*************


day3code2=(arr,landField)=>{
    let multiply = 1;
    grid=(route,x,y)=>{
        let adder = x;
        let countTrees = 0;
        for(let i=0; i<route.length; i+=y){
            if(i!=0){
                if((route[i][x])==="#") countTrees++;
                x=(x+adder)%31;
            }
        }
    return countTrees
    }
    for(let j=0; j<arr.length; j++){
        multiply=multiply*(grid(landField,arr[j][0],arr[j][1]));
    }
    return multiply
}
    
console.log(day3code2([[1,1],[3,1],[5,1],[7,1],[1,2]],landField))

  





    


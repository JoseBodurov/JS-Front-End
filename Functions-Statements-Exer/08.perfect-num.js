function isPerfect(num){
   let divisors = [];
   for (let currentNum = 1; currentNum < num; currentNum++) {
    if(num % currentNum ===0){
        divisors.push(currentNum);
    }
}
    let divisorsSum = divisors.reduce((prevVal,currentVal)=> {
      return prevVal + currentVal;
    },0)
    if(num === divisorsSum){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
   } 
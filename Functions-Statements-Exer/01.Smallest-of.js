function smallestOfThree(...num){
   const minimum = num.reduce((a,b)=> Math.min(a,b));
   console.log(minimum);
}

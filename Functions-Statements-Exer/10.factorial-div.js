function factorialDiv(firstN,secondN){
 return (factorial(firstN) / factorial(secondN)).toFixed(2);
function factorial(num){
if(num === 1 ){
    return num;
}
    return num * factorial(num-1);
}
}
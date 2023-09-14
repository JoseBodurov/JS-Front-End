function calculations( firstNum, secondNum, thirdNum){
const sum = (a,b) => a+b;
const subtract = (mySum,num) => mySum - num;

return subtract(sum(firstNum,secondNum),thirdNum);
}
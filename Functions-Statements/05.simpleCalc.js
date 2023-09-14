function calculatorSimple(num1,num2,oper){
const sum = (a,b) => a+b;
const subtract = (a,b) => a-b;
const divide = (a,b) => a/b;
const multiply = (a,b) => a*b;

switch(oper){
    case 'add':
        return sum(num1,num2);
        case 'subtract':
        return subtract(num1,num2);
        case 'divide':
        return divide(num1,num2);
        case 'multiply':
        return multiply(num1,num2);
        default:
        console.log('Invali Op!'); 
        break;
}

}
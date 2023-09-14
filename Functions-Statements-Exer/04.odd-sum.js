function sum(number){
    let n = number.toString();
    let numberString = n.split('');
    let sumEven = 0;
    let sumOdd = 0;
    for (let index = 0; index < numberString.length; index++) {
        if(numberString[index]%2===0){
            sumEven += Number(numberString[index]);
        }else{
            sumOdd += Number(numberString[index]);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

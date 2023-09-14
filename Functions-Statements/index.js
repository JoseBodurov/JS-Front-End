function printStar(count){
    console.log('*'.repeat(count));
}

printStar(3);

const printStar = function(count){
    console.log('*'.repeat(count));
}

function multiply(){
    let params = Object.values(arguments);
    let sum = 1;
    for (let i = 0; i < params.length; i++) {
        sum *= params[i];
    }
    return sum;
}
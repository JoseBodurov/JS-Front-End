function solve(num){
    let numS = num.toString();
    let arr = numS.split('');
    let sum = 0;
    for (let a of arr) {
       let dig = Number(a);
        sum += dig
    }
    console.log(sum);
}
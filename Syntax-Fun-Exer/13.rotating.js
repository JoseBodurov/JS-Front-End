function solve(numbers,rot){
    rot %= numbers.length;

    for (let i = 0; i < rot; i++) {
      let firstNum = numbers.shift();
      numbers.push(firstNum);
    }
    console.log(numbers.join(' '));

}

function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    let firstN = Number(firstNum.value);
    let secondN = Number(secondNum.value);
    let sum = firstN - secondN;

    result.textContent = sum;

}
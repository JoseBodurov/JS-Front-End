function focused() {
    const allInputs = Array.from(document.getElementsByTagName('input'));
    [].map((el)).filter(el);


    for (const input of allInputs) {
        input.addEventListener('focus',handleFocus);
        input.addEventListener('blur',handleBlur);
    }

    function handleFocus(e){
        const currentInput = e.target;
        const parrentDiv = currentInput.parentElement;
        parrentDiv.classList.add('focused');
    }
    function handleBlur(e){
        const currentInput = e.target;
        const parrentDiv = currentInput.parentElement;

        if(parrentDiv.classList.contains('focused')){
            parrentDiv.classList.remove('focused');
        }
    }
}
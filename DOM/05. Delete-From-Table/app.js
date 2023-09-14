function deleteByEmail() {
    const result = document.getElementById('result');
    const input = document.querySelector('input[name ="email"]');
    const evenSelector = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let emailValue = input.value;
    let foundElement = evenSelector.find((td)=> td.textContent === emailValue);
    if(foundElement){
        console.log(foundElement);
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.';
    }else{
        result.textContent = 'Not found.';
    }

}
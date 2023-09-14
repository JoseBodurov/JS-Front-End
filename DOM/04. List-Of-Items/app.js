function addItem() {
    const ulContainer = document.getElementById("items");
    const inputContainer = document.getElementById("newItemText");
    const newLi = document.createElement('li');
    newLi.textContent = inputContainer.value;
    ulContainer.appendChild(newLi);
    inputContainer.value = '';
}
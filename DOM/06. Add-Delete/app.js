function addItem() {
        const ulContainer = document.getElementById('items');
        const inputContainer = document.getElementById('newItemText');
        const newLi = document.createElement('li');
        const newAnchor = document.createElement('a');
        newLi.textContent = inputContainer.value;
        newAnchor.textContent = '[Delete]';
        newAnchor.addEventListener('click',deleteHandler);
        newAnchor.setAttribute('href', '#');
        newLi.appendChild(newAnchor);
        ulContainer.appendChild(newLi);
        inputContainer.value = '';


        function deleteHandler(e){
           const liItem = e.currentTarget.parentElement;
           liItem.remove();
        }
}

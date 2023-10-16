function addItem() {
    // Your task is to take values from input fields with ids "newItemText" and "newItemValue". 
    const newItemText = document.querySelector('#newItemText');
    const newItemValue = document.querySelector('#newItemValue');
    const select = document.querySelector('#menu');

    const option = document.createElement('option');

    option.textContent = newItemText.value;
    option.value = newItemValue.value;

    select.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}
function subtract() {

    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);

    const subtract = firstNumber - secondNumber;

    document.getElementById('result').textContent = subtract;
    console.log(subtract);
}
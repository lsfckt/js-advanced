function solve() {

  let [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', get);
  buyBtn.addEventListener('click', buy);

  function get(e) {

    const inputText = JSON.parse(input.value);

    for (const obj of inputText) {

      const newRow = document.createElement('tr');
      document.querySelector('.table tbody').appendChild(newRow);

      for (const key in obj) {
        
        if (key === 'img') {
          const imgTd = document.createElement('td');
          const newImg = document.createElement('img');

          newImg.setAttribute('src', obj[key]);
          newRow.appendChild(imgTd).appendChild(newImg);

        } else if (key === 'name') {
          const nameTd = document.createElement('td');
          const nameP = document.createElement('p');

          newRow.appendChild(nameTd).appendChild(nameP);
          nameP.textContent = obj[key];

        } else if (key === 'price') {
          const priceTd = document.createElement('td');
          const priceP = document.createElement('p');

          newRow.appendChild(priceTd).appendChild(priceP);
          priceP.textContent = obj[key];

        } else {
          const deFacTd = document.createElement('td');
          const deFacP = document.createElement('p');

          newRow.appendChild(deFacTd).appendChild(deFacP);
          deFacP.textContent = obj[key];
        }
      }
      const checkTd = document.createElement('td');
      const newCheck = document.createElement('input');

      newRow.appendChild(checkTd).appendChild(newCheck);
      newCheck.setAttribute('type', 'checkbox');
    }

  }

  function buy(e) {

    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const bought = [];
    let totalPrice = 0;
    let decFac = 0;

    for (const check of checkBoxes) {
      if (check.checked) {

        const furniture = check.parentNode.parentNode.childNodes[1].textContent;
        totalPrice += Number(check.parentNode.parentNode.childNodes[2].textContent);
        decFac += Number(check.parentNode.parentNode.childNodes[3].textContent);

        bought.push(furniture);
      }
    }
    const avgDecFac = decFac / bought.length;
    output.textContent = `Bought furniture: ${bought.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFac}`
  }
}
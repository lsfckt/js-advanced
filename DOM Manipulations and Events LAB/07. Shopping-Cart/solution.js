function solve() {
   
   const outputArea = document.querySelector('textarea');
   const addBtn = document.querySelectorAll('.add-product');

   const boughts = [];
   let totalMoney = 0;

   for (const button of addBtn) {
      button.addEventListener('click', (e) => {

         const currProduct = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
         const currPrice = Number(e.target.parentNode.parentNode.querySelector('.product-line-price').textContent);

         let output = `Added ${currProduct} for ${currPrice.toFixed(2)} to the cart.\n`
         outputArea.value += output;

         if (!boughts.includes(currProduct)) {
            boughts.push(currProduct);
         }

         totalMoney += currPrice;
      });
   }

   const checkoutBtn = document.querySelector('.checkout');

   checkoutBtn.addEventListener('click', (event) => {
      let totalOutput = `You bought ${boughts.join(', ')} for ${totalMoney.toFixed(2)}.`
      outputArea.value += totalOutput;

      const buttons = document.querySelectorAll('button');

      for (const currButton of buttons) {
         currButton.setAttribute('disabled', 'false');
      }
   });

}
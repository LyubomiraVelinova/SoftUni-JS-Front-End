function solve() {
   const addBtn = Array.from(document.querySelectorAll('.add-product'));
   const textArea = document.querySelector(`body > div > textarea`);
   const checkoutBtn = document.querySelector(`body > div > button`);
   addBtn.forEach(button => {
      button.addEventListener('click', productsAppearance);
   });
   checkoutBtn.addEventListener('click', calculateTotal);


   let total = 0;
   let listOfProducts = [];
   function productsAppearance(e) {
      const currentProduct = e.target.parentNode.parentNode;
      const name = (currentProduct.children[1].children[0]).textContent;
      listOfProducts.push(name);
      const money = Number(currentProduct.children[3].textContent);
      total += money;
      console.log(total)
      textArea.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;
   }

   function calculateTotal() {
      listOfProducts = [... new Set(listOfProducts)];
      textArea.value += `You bought ${listOfProducts.join(', ')} for ${total.toFixed(2)}.`

      addBtn.forEach(btn => {
         btn.disabled = true;
      });
      checkoutBtn.disabled = true;
   }
}
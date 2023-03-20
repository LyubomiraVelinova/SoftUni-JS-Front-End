function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputText = document.getElementById('searchField');
      const allRows = Array.from(document.querySelectorAll('tbody > tr td'));
      allRows.forEach(row => {
         
         if (row.textContent === inputText.value) {
            row.parentElement.classList.add('select');
         }
         
      });
      row.parentElement.classList.remove('select');
      inputText.value = '';
   }
}
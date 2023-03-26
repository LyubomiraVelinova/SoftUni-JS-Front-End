function search() {
   const input = document.getElementById('searchText');
   const liInput = Array.from(document.getElementById('towns').children);
   const result = document.getElementById('result');

   let matches = 0;
   liInput.forEach(li => {
      const town = li.textContent;
      if (town.includes(input.value)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         matches += 1
      }
   });
   result.textContent = `${matches} matches found`;
   input.addEventListener('click', clearPreviousSearch);
   function clearPreviousSearch() {
      input.value = '';
      liInput.forEach(li => li.style = 'none');
      result.textContent = '';
   }
}

function create(words) {
   const div = document.getElementById('content');
   words
      .forEach(word => {
         const newDiv = document.createElement('div');
         const p = document.createElement('p');
         p.textContent = word;
         p.style.display = 'none';

         newDiv.addEventListener('click', function(e){
            p.style.display = 'block'
         })

         div.appendChild(newDiv).appendChild(p);
      });
}
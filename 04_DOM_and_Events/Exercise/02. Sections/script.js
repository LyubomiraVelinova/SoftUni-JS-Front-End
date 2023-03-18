function create(words) {
   const div = document.getElementById('content');
   words
      .forEach(word => {
         let newDiv = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = word;
         p.style.display = 'none';
         div.appendChild(newDiv).appendChild(p);
         newDiv.addEventListener('click', function(e){
            p.style.display = 'block'
         })
      });
}
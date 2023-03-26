function loadRepos() {
   const BASE_URL = `https://api.github.com/users/testnakov/repos`;
   const resultContainer = document.getElementById(`res`);
   fetch(BASE_URL, { method: `GET` })
      .then((res) => res.json())
      .then((data) => {
         resultContainer.textContent = data;
         console.log(data);
      })
      .catch((err) => {
         console.error(err);
      })
}
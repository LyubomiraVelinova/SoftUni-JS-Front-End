function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const booksContainer = document.querySelector('body > table > tbody');
  // const tbody = booksContainer.parentNode;
  const loadBtn = document.getElementById('loadBooks');
  const submitBtn = document.querySelector('#form button');
  const inputs = Array.from(document.querySelectorAll('#form input'));

  loadBtn.addEventListener('click', loadingBooks);
  submitBtn.addEventListener('click', createBook);

  function loadingBooks() {
    booksContainer.innerHTML = '';
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        for (let { author, title } of Object.values(data)) {
          booksContainer.innerHTML = `
          <td>${title}</td>
          <td>${author}</td>
          <td>
              <button>Edit</button>
              <button>Delete</button>
          </td>
        `
        }
      })
      .catch((err) => console.error(err))
  }

  function createBook() {
    if (inputs[0].value !== '' && inputs[1].value !== '') {
      let newTitle = inputs[0];
      let newAuthor = inputs[1];
      fetch((BASE_URL), {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          author: newAuthor,
          title: newTitle
          
          const newTr = document.createElement('tr');
          newTr.innerHTML = `
            <td>${newTitle}</td>
            <td>${newAuthor}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
          `
          tbody.appendChild(newTr);
        })
      })

    }
  }

  attachEvents();
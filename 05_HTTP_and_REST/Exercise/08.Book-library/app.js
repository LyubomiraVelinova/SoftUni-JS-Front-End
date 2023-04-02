function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const booksContainer = document.querySelector('body > table > tbody');
  // const tbody = booksContainer.parentNode;
  const loadBtn = document.getElementById('loadBooks');
  const submitBtn = document.querySelector('#form button');
  let allBooks = {};
  let editBookId = null;
  const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form input'));
  const formHeader = document.querySelector('#form > h3');

  loadBtn.addEventListener('click', loadBookHandler);
  submitBtn.addEventListener('click', submitFormHandler);

  function loadBookHandler() {
    booksContainer.innerHTML = '';
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((booksData) => {
        allBooks = booksData;
        for (const bookId in booksData) {
          const { author, title } = booksData[bookId];
          const tr = document.createElement('tr');
          const firstTd = document.createElement('td');
          firstTd.textContent = title;
          const secondTd = document.createElement('td');
          secondTd.textContent = author;
          const thirdTd = document.createElement('td');
          const editBtn = document.createElement('button');
          editBtn.textContent = 'Edit';
          editBtn.addEventListener('click', () => {
            editBookId = bookId;
            titleInput.value = title;
            authorInput.value = author;
            formHeader.textContent = 'Edit FORM';
            submitBtn.textContent = 'Save';
          });

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.id = bookId;
          deleteBtn.addEventListener('click', deleteBookHandler)

          // DOM Manipulations
          tr.appendChild(firstTd);
          tr.appendChild(secondTd);
          tr.appendChild(thirdTd);
          thirdTd.appendChild(editBtn);
          thirdTd.appendChild(deleteBtn);
          booksContainer.appendChild(tr);
        }
      })
      .catch((err) => console.error(err))
  }

  async function submitFormHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    if (title !== '' && author !== '') {
      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ author, title })
      }
      let url = BASE_URL;
      // fetch((BASE_URL), {
      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify({ author, title})
      // })

      if (formHeader.textContent === 'Edit FORM') {
        httpHeaders.method = 'PUT';
        url += editBookId;
      }

      const resData = await fetch(url, httpHeaders);
      loadBookHandler();

      if (formHeader.textContent === 'Edit FORM') {
        formHeader.textContent = 'FORM';
        submitBtn.textContent = 'Submit';
      }
      titleInput.value = '';
      authorInput.value = '';
    }
  }

  async function deleteBookHandler() {
    const id = this.id;
    const httpHeaders = {
      method: 'DELETE'
    };

    await fetch(BASE_URL + id, httpHeaders);
    loadBookHandler();
  }

  // function loadEditDataHandler(event) {
  //   const currentTr = event.currentTarget.parentNode.parentNode;
  //   const currentTitle = currentTr.children[0].textContent;
  //   const currentAuthor = currentTr.children[1].textContent;
  //   titleInput.value = currentTitle;
  //   authorInput.value = currentAuthor;
  //   formHeader.textContent = 'Edit FORM';
  //   const saveBtn = submitBtn;
  //   saveBtn.textContent = 'Save';
  //   saveBtn.addEventListener('click', saveEditHandler);

  //   function saveEditHandler() {
  //     fetch((BASE_URL), {
  //       method: 'PUT',
  //       headers: { 'Content-type': 'application/json' },
  //       body: JSON.stringify({ author, title})
  //     })
  //   }
  // }

}

attachEvents();
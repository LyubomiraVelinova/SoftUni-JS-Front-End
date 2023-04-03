function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const inputs = document.querySelector('#form > div.inputs');
  const [firstNameInput, lastNameInput, facultyNumInput, gradeInput] = inputs.children;
  const tbody = document.querySelector('#results > tbody');
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addNewStudent);

  listStudents();

  function addNewStudent() {
    tbody.innerHTML = ''
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumInput.value;
    const grade = gradeInput.value;
    if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
      fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
      })
      listStudents();
    }
  }

  // function checkCorrectInputs() {
  //   for (const item of inputs) {
  //     if (!item.value.trim()) {
  //       return false
  //     }
  //   }
  //   return true
  // }

  // List students with GET request
  function listStudents() {
    tbody.innerHTML = ''
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        let students = Object.values(data);
        students.forEach(student => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
            `;
          tbody.appendChild(tr);
        });
      })
  }

  // function createNewStudent() {
  //   if (!checkCorrectInputs()) {
  //     return
  //   }

  //   
  //   listStudents();
  //   firstNameInput.value = null;
  //   lastNameInput.value = null;
  //   facultyNumInput.value = null;
  //   gradeInput.value = null;
  // }
}

attachEvents();
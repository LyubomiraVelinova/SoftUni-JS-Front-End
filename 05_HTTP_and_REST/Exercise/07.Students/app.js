function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const inputs = document.querySelectorAll('#form > div.inputs')[0];
  const [firstNameInput, lastNameInput, facultyNumInput, gradeInput] = inputs.children;
  const tbody = document.querySelector('#results > tbody');
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', createNewStudent);

  function checkCorrectInputs() {
    for (const item of inputs) {
      if (!item.value.trim()) {
        return false
      }
    }
    return true
  }
  listStudents();

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

  function createNewStudent() {
    if (!checkCorrectInputs()) {
      return
    }

    fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        facultyNumber: facultyNumInput.value,
        grade: gradeInput.value,
      }),
    })
    listStudents();
    firstNameInput.value = null;
    lastNameInput.value = null;
    facultyNumInput.value = null;
    gradeInput.value = null;
  }
}

attachEvents();
function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const inputs = document.querySelector('#form > div.inputs');
  const [firstNameInput, lastNameInput, facultyNumInput, gradeInput] = inputs.children;
  const tbody = document.querySelector('#results > tbody');
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addNewStudent);

  listStudents();

  async function listStudents() {
    try {
      tbody.innerHTML = ''
      const response = await fetch(BASE_URL);
      const data = await response.json();
      const students = Object.values(data);
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
    } catch (e) {
    }
  }

  async function addNewStudent() {
    try {
      tbody.innerHTML = ''
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      const facultyNumber = facultyNumInput.value;
      const grade = gradeInput.value;
      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
      }

      if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
        const response = await fetch(BASE_URL, httpHeaders)
        listStudents();
      }
    } catch (e) {
    }
  }
}

attachEvents();
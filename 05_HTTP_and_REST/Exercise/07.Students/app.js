function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const inputs = document.querySelectorAll('#form > div.inputs')[0];
  const [firstNameInput, lastNameInput, facultyNumInput, gradeInput] = inputs.children;
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', createNewStudent);

  listStudents()

  function listStudents() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        let students = Object.values(data);
        students.forEach(student => {
          console.log(student)
          const tr = document.createElement('tr');
          tr.innerHTML = `
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.facultyNumber}</td>
          <td>${student.grade}</td>
          `;
        });
      })
  }

  function createNewStudent() {
    console.log(firstNameInput.value)
    console.log(lastNameInput.value)
    console.log(facultyNumInput.value)
    console.log(gradeInput.value)
  }
}


attachEvents();
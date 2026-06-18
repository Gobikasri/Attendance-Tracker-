async function toggleAttendance(id) {
  await updateAttendance(id);
  initializeApp();
}

async function removeStudent(id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmDelete) return;

  await deleteStudent(id);
  initializeApp();
}

async function createStudent() {
  const name =
    document.getElementById("student-name").value;

  const rollNo =
    document.getElementById("roll-no").value;

  if (!name || !rollNo) {
    alert("Please fill all fields");
    return;
  }

  await addStudent({
    name,
    rollNo,
    status: "Present"
  });

  document.getElementById("student-name").value = "";
  document.getElementById("roll-no").value = "";

  initializeApp();
}

async function initializeApp() {
  const students = await fetchStudents();

  renderDashboard(students);
  renderStudentList(students);
}

initializeApp();
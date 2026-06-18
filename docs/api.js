const API_URL = "http://localhost:5000/students";

async function fetchStudents() {
  const response = await fetch(API_URL);
  return await response.json();
}

async function addStudent(student) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });
}

async function updateAttendance(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT"
  });
}

async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
}
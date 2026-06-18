function renderStudentList(studentData) {
  const container = document.getElementById(
    "student-list-container"
  );

  container.innerHTML = "";

  studentData.forEach(student => {
    const isPresent =
      student.status === "Present";

    const buttonClass =
      isPresent
        ? "btn-present"
        : "btn-absent";

    const row = document.createElement("div");

    row.className = "student-row";

    row.innerHTML = `
      <div class="student-info">
        <span class="roll-no">
          ${student.rollNo}
        </span>

        <span class="student-name">
          ${student.name}
        </span>
      </div>

      <div>
        <button
          class="status-btn ${buttonClass}"
          onclick="toggleAttendance(${student.id})"
        >
          ${student.status}
        </button>

        <button
          class="delete-btn"
          onclick="removeStudent(${student.id})"
        >
          Delete
        </button>
      </div>
    `;

    container.appendChild(row);
  });
}

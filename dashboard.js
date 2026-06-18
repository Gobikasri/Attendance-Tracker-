function renderDashboard(studentData) {
  const container = document.getElementById('dashboard-container');
  
  const total = studentData.length;
  const present = studentData.filter(s => s.status === 'Present').length;
  const absent = total - present;

  container.innerHTML = `
    <div class="card">
      <h3>Total Students</h3>
      <p class="count">${total}</p>
    </div>
    <div class="card present-card">
      <h3>Present</h3>
      <p class="count">${present}</p>
    </div>
    <div class="card absent-card">
      <h3>Absent</h3>
      <p class="count">${absent}</p>
    </div>
  `;
}
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [
  {
    id: 1,
    name: "Arun Kumar",
    rollNo: "24BCS001",
    status: "Present"
  },
  {
    id: 2,
    name: "Divya",
    rollNo: "24BCS002",
    status: "Absent"
  }
];

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Add student
app.post("/students", (req, res) => {
  const newStudent = {
    id: Date.now(),
    ...req.body
  };

  students.push(newStudent);

  res.json(newStudent);
});

// Toggle attendance
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.map(student => {
    if (student.id === id) {
      return {
        ...student,
        status:
          student.status === "Present"
            ? "Absent"
            : "Present"
      };
    }

    return student;
  });

  res.json({
    message: "Updated"
  });
});

// Delete student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter(
    student => student.id !== id
  );

  res.json({
    message: "Deleted"
  });
});

// Home Route
app.get("/", (req, res) => {
  res.send("Student Attendance Tracker Backend Running");
});

// Render-compatible port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

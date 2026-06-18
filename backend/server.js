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

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const newStudent = {
    id: Date.now(),
    ...req.body
  };

  students.push(newStudent);

  res.json(newStudent);
});

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

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter(
    student => student.id !== id
  );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

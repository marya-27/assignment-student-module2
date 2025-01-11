const express = require('express');
const router = express.Router();

let students = [];

// Create student
router.post('/', (req, res) => {
  const { firstName, lastName, email, enrollmentDate } = req.body;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  // Generating a simple id for each student
  const id = students.length + 1;  // Simple auto-increment ID

  const student = { id, firstName, lastName, email, enrollmentDate, createdAt, updatedAt };
  students.push(student);
  res.status(201).send({ message: 'Student created successfully', student });
});

// Read all students
router.get('/', (req, res) => {
  res.send(students);
});

// Update student by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, enrollmentDate } = req.body;

  const student = students.find((s) => s.id === parseInt(id));
  if (student) {
    if (firstName) student.firstName = firstName;
    if (lastName) student.lastName = lastName;
    if (email) student.email = email;
    if (enrollmentDate) student.enrollmentDate = enrollmentDate;
    student.updatedAt = new Date().toISOString();
    res.send({ message: 'Student updated successfully', student });
  } else {
    res.status(404).send({ message: 'Student not found' });
  }
});

// Delete student by ID or all students
router.delete('/:id?', (req, res) => {
  const { id } = req.params;

  if (id) {
    // Delete specific student by ID
    students = students.filter((s) => s.id !== parseInt(id));
    res.send({ message: 'Student deleted successfully' });
  } else {
    // Delete all students
    students = [];
    res.send({ message: 'All students deleted successfully' });
  }
});

module.exports = router;

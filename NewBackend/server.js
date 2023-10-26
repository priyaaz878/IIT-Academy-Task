const express = require('express');
const cors = require('cors');
const app = express();

// Import your controller files

const studentController = require('./controllers/studentController');

const teacherController = require('./controllers/teacherController');
const allowedOrigins = ["http://localhost:3001"]; // Add your frontend URL here

// Define routes using the controllers
app.get('/students', studentController.getAllStudents);
app.get('/students/:id', studentController.getStudentById);
app.post('/students', studentController.createStudent);
app.put('/students/:id', studentController.updateStudent);
app.delete('/students/:id', studentController.deleteStudent);

app.get('/teachers', teacherController.getAllTeachers);
app.get('/teachers/:id', teacherController.getTeacherById);
app.post('/teachers', teacherController.createTeacher);
app.put('/teachers/:id', teacherController.updateTeacher);
app.delete('/teachers/:id', teacherController.deleteTeacher);

app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    })
  );
// ...other middleware and setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  


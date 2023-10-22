// src/App.js
import React from 'react';
import "../src/App.css";

import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div className="login-container">
    <div className="student-login">
      <StudentLogin />
    </div>
    <div className="teacher-login">
      <TeacherLogin />
    </div>
  </div>
  );
}

export default App;

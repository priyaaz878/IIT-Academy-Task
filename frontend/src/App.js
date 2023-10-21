import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Studentloginbutton from './components/Studentloginbutton';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Studentloginbutton />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

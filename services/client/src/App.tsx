import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UserRegister from './pages/register';
import Home from './pages/home';
import Project from './pages/project';
import Task from './pages/task';
import Team from './pages/team';
import Setting from './pages/setting';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/projects/" element={<Project />} />
          <Route path="/tasks/" element={<Task />} />
          <Route path="/teams/" element={<Team />} />
          <Route path="/settings/" element={<Setting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

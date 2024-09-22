import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import './App.css';
import Login from './components/Login';
import AMRLogin from './components/AMRlogin';
import StudentLogin from './components/StudentLogin';
import CollegeLogin from './components/CollegeRegister';
// import Dashboard from './components/Dashboard';
// import Header from './components/Header';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // const pathname = window.location.pathname;

  // if (pathname === "/login") {
  //   return <Login />;
  // } else if (pathname === "/SocialFeed") {
  //   return <Login />;
  // } else {
  //   return (
  //     <div className="App">
  //       <Sidebar />
  //       {/* Default content or home page */}
  //     </div>
  //   );
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/amr-login" element={<AMRLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/college-login" element={<CollegeLogin />} />
      </Routes>
    </Router>
  );

  
}

export default App;

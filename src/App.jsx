import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import './App.css';
import Login from './components/Login';
import AMRLogin from './components/AMRlogin';
import StudentLogin from './components/StudentLogin';
import CollegeLogin from './components/CollegeRegister';
import DashboardWelcome from "./components/DashboardWelcome";
import Card from "./components/card2";
import MyEvents from "./components/MyEvents";
import Spotlight from "./components/Spotlight";
// import Nav from "./navbar"; 
// import Footer from "./Footer";
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

  return (<>
    {/* <div>
      <Nav/>
    </div> */}
    <div className="App">
      <Sidebar />
      <div className="content">
      <DashboardWelcome/>
       <MyEvents/>
      <Spotlight/>
      {/* <Card/> */}
      {/* <Footer/> */}
       </div>
    </div>
    </>
  )

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Login />} />
  //       <Route path="/amr-login" element={<AMRLogin />} />
  //       <Route path="/student-login" element={<StudentLogin />} />
  //       <Route path="/college-login" element={<CollegeLogin />} />
  //     </Routes>
  //   </Router>
  // );

  
}

export default App;

import React from 'react';
import './Header.css';

const Header = ({ isSidebarOpen }) => {
  return (
    <header className={isSidebarOpen ? "header open" : "header closed"}>
      <div className="logo">LOGO</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-info">
        <span>User Profile</span>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
// import { Link } from "react-router-dom";




function Sidebar() {
  return (
    <div className="Sidebar">

      <ul className="SidebarList">
      <div className="logo_container">
          <img src="./logo_alma_matter.png" alt="" height={52} width={168}/>
      </div>
        <div className="title_container"> <li className="row_title">Menu</li> </div>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              // onClick={() => {
              //   window.location.pathname = val.link;
              // }}
            >
              {/* <a href={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </a> */}

              {/* <Link to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link> */}
            {/* <a href={val.link}>
            <div id="icon">{val.icon}</div>
            </a>  
            <a href={val.link}>
              <div id="title">{val.title}</div>
             </a>  */}

              <a href={val.link} className="sidebar-link">
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </a>
            </li>
          );
        })}

        
      </ul>
    </div>
  );
}

export default Sidebar;

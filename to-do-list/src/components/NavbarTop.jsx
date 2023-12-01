import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBar";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar({darkMode}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: darkMode ? '#ffff' : '#000' }}>
        <div style={darkMode ? {borderBottom: '2px solid #5D38F1'} : {borderBottom: '1px solid'}} className={darkMode  ? 'darkMode navbar' : 'ligthMode navbar'}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={
          darkMode && sidebar ? "darkMode nav-menu active" : "darkMode nav-menu" +
          !darkMode && sidebar ? "ligthMode nav-menu active" : "ligthMode nav-menu"
      }>
          <ul style={darkMode ? {borderRight: '2px solid #5D38F1'} : {}} className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" >
                <AiIcons.AiOutlineClose width={6000} height={600} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
            
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
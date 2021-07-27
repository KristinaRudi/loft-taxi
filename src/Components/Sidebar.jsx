import React from "react";
import '../../src/Styles/sidebar.css';
import logo from '../img/logo/logo-sidebar.png';



export const Sidebar = () => {
  return <div className="sidebar__section">
   <img src={logo} alt={"logo"} className="sidebar__logo" />
  </div>
}

export default Sidebar;
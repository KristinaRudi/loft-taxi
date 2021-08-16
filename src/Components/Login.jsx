import React from "react";
import '../../src/App.css';
import '../../src/Styles/login.css';


import Sidebar from '../../src/Components/Sidebar';
import Map from '../../src/Components/Map';
import Loginform from '../../src/Components/Loginform';

const login = <Loginform />

export const Login = (props) => {
  return (
    <div className="main-page">
      <Sidebar />
      <Map> {login}</Map> 
    </div>
  );
}


export default Login;
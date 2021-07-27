import React from "react";
import '../../src/App.css';
import '../../src/Styles/login.css';


import Sidebar from '../../src/Components/Sidebar';
import Map from '../../src/Components/Map';
import Loginform from '../../src/Components/Loginform';


export class Login extends React.Component {


  render() {

    return (
      <div className="main-page">
        <Sidebar />
        <Map>
        <Loginform />
        </Map>
      </div>
    );
  }
}

export default Login;
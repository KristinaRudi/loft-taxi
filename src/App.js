import React from "react";
import { Login } from './Components/Login';
import { Checkin } from './Components/Checkin';
import { Map } from './Components/Map';
import { Profile } from './Components/Profile';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './App.css';

const PAGES = {
  login: <Login />,
  checkin: <Checkin />,
  map: <Map />,
  profile: <Profile />,
}

class App extends React.Component {

  state = { currentPage: "home" }

  navigateTo = (page) => { //принимаем новое значение страницы через аргументы
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <>
        <Login />
      </>

    );
  }
}

export default App;




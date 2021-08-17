import React from "react";
import { Login } from './Components/Login';
import { Checkin } from './Components/Checkin';
import { Map } from './Components/Map';
import { Profile } from './Components/Profile';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './App.css';
// import './Styles/main.css';
// import './Styles/normalize.css';

const PAGES = {
  login: <Login />,
  checkin: <Checkin />,
  map: <Map />,
  profile: <Profile />,
}

class App extends React.Component {

  state = { currentPage: " login" }

  navigateTo = (page) => { //принимаем новое значение страницы через аргументы
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => {
                  this.navigateTo("login");
                }}
                >
                  Login
                </button>
              </li>
              <li>
                <button onClick={() => {
                  this.navigateTo("checkin");
                }}
                >
                  Checkin
                </button>
              </li>
              <li>
                <button onClick={() => {
                  this.navigateTo("map");
                }}
                >
                  Map
                </button>
              </li>
              <li>
                <button onClick={() => {
                  this.navigateTo("profile");
                }}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;




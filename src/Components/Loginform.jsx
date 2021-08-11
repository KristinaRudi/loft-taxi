import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import '../../src/Styles/login.css';


export class Loginform extends React.Component {
  state = { Name: "", Password: "" };

  handleSubmit = event => {
    event.preventDefault();
    // Предотвращаем перезагрузку страницы
    console.log(this.state.Name);
    console.log(this.state.Password);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {

    const { Name, Password } = this.state;

    return (
      <div className="wrapper">
        <form className="form" onSubmit={this.handleSubmit}>
          {/* <input type="submit" value="Войти" /> */}
          <div className="enter">Войти</div>
          <TextField className="formbutton"
            id="standard-textarea"
            type="text"
            label="Имя пользователя*"
            name="Name"
            value={Name}
            placeholder="mail@mail.ru"
            multiline
            onChange={this.handleChange}
          />
          <TextField className="formbutton"
            id="standard-textarea"
            label="Пароль*"
            name="Password"
            value={Password}
            placeholder="*********"
            multiline
            onChange={this.handleChange}
          />

          <a href="google.com" className="forgotpass">Забыли пароль?</a>
          <button name="submit" className="button">Войти</button>
          <div className="new__user">
            <span>Новый пользователь?</span>
            <a href="google.com" className="registration__link">Регистрация</a>
          </div>
        </form>
      </div>
    )
  }
}
export default Loginform;
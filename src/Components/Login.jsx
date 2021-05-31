import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../../src/Styles/login.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    
    },
  },
}));

function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value)
  };
};


export class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    // // Запрещаем перезагрузку страницы
    // const firstName = event.target.firstName.value;
    // const lastName = event.target.lastName.value;
    // console.log(firstName, lastName);
    // // Делаем что-то с данными...
  }
  render() {
    return (
      // <form> action="/login" method="post"
      <div className="wrapper__form">
        <form>
          <div className="enter">Войти</div>
          <TextField className="formbutton"
            id="standard-textarea"
            label="Имя пользователя*"
            placeholder="mail@mail.ru"
            multiline
          />
          <TextField className="formbutton"
            id="standard-textarea"
            label="Пароль*"
            placeholder="*********"
            multiline
          />
          <a href="google.com" className="forgotpass">Забыли пароль?</a>
          <button name="submit" className="button">Войти</button>
          <div className="new__user">
            <span>Новый пользователь?</span>
            <a href="google.com" className="registration__link">Регистрация</a>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
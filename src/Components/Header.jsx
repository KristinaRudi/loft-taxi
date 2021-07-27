import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../src/Styles/header.css';
import logo from "../../src/img/logo/logo-header.png"

const useStyles = makeStyles((theme) => ({
  mainHeader: {
  backgroundColor: "#1C1A19",
  padding: "0 50px 0 27px",
  minHeight:"102px",
  display:"flex",
  alignItems:"center",
  flexDirection: "row",
  justifyContent:"space-between",
  boxShadow:"none",
},

  logoSize: {
  width: "269px",
  height: "61px",
},

  menuButtons: {
  width: "294px",
  height: "25px",
  display: "flex",
  justifyContent: "space-between",
},

  mainHeaderButton: {
  fontFamily: "Roboto",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: "20px",
},


}));



export default function Header() {
  const classes = useStyles(
  );


  return (

    <AppBar position="static" className={classes.mainHeader}>
        <img src={logo} className={classes.logoSize} />
        <div className={classes.menuButtons} >
          <Button className={classes.mainHeaderButton} color="inherit">Карта</Button>
          <Button className={classes.mainHeaderButton} color="inherit">Профиль</Button>
          <Button className={classes.mainHeaderButton} color="inherit">Выйти</Button>
        </div>
    </AppBar>


  );
}

